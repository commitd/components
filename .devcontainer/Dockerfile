# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.148.1/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# Add additional packages 
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
        # Add utilties
        && sudo apt -y install --no-install-recommends software-properties-common apt-transport-https gnupg2 bash-completion \
        # Add key for GitHub CLI
        && sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0 \
        && sudo apt-add-repository https://cli.github.com/packages \
        && sudo apt update \
        # Install github cli
        && sudo apt -y install --no-install-recommends gh

# Add bash completions
RUN echo 'source <(gh completion -s bash)' >> ~/.bashrc \
    && echo 'source <(kubectl completion bash)' >> ~/.bashrc \
    && echo 'source <(skaffold completion bash)' >> ~/.bashrc \
    && touch ~/.bash_profile