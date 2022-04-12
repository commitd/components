# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.148.1/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# https://github.com/microsoft/vscode-dev-containers/blob/master/containers/docker-in-docker/.devcontainer/Dockerfile

# [Option] Install zsh
ARG INSTALL_ZSH="true"
# [Option] Upgrade OS packages to their latest versions
ARG UPGRADE_PACKAGES="false"
# [Option] Enable non-root Docker access in container
ARG ENABLE_NONROOT_DOCKER="true"
# [Option] Use the OSS Moby Engine instead of the licensed Docker Engine
ARG USE_MOBY="true"

# Install needed packages and setup non-root user. Use a separate RUN statement to add your
# own dependencies. A user of "automatic" attempts to reuse an user ID if one already exists.
ARG USERNAME=automatic
ARG USER_UID=1000
ARG USER_GID=$USER_UID
COPY library-scripts/*.sh /tmp/library-scripts/
RUN apt-get update \
    && /bin/bash /tmp/library-scripts/common-debian.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" \
    # Use Docker script from script library to set things up
    && /bin/bash /tmp/library-scripts/docker-in-docker-debian.sh "${ENABLE_NONROOT_DOCKER}" "${USERNAME}" "${USE_MOBY}" \
    # Clean up
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts/
    
VOLUME [ "/var/lib/docker" ]

# Setting the ENTRYPOINT to docker-init.sh will start up the Docker Engine 
# inside the container "overrideCommand": false is set in devcontainer.json. 
# The script will also execute CMD if you need to alter startup behaviors.
ENTRYPOINT [ "/usr/local/share/docker-init.sh" ]
CMD [ "sleep", "infinity" ]

# Add additional packages 
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
        # Add utilties
        && sudo apt -y install --no-install-recommends software-properties-common apt-transport-https gnupg2 bash-completion \
        # Add key for GitHub CLI
        && sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0 \
        && sudo apt-add-repository https://cli.github.com/packages \
        && sudo apt update \
        # Install github cli
        && sudo apt -y install --no-install-recommends gh \
        && npm install npm@latest -g 

# Install act
RUN curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash

# Install shell completions, only for the user (so we don't break anything in root)
RUN echo 'source <(gh completion -s bash)' >> ~/.bashrc \
    && echo 'source <(gh completion -s zsh)' >> ~/.zshrc \
    && touch ~/.bash_profile \
    # Install useful oh-my-* shell plugins
    && sed -i.bak 's/^plugins=(\(.*\)/plugins=(debian docker docker-compose node npm yarn vscode \1/' ~/.zshrc \
    && sed -i.bak 's/^plugins=(\(.*\)/plugins=(npm \1/' ~/.bashrc

RUN npm i -g npm@7 --registry=https://registry.npmjs.org