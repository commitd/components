import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@committed/ds'

export const AccordionExample = () => (
  <Accordion type="multiple">
    <AccordionItem value="item-1">
      <AccordionHeader>Item 1</AccordionHeader>
      <AccordionContent>
        Here goes the content for the accordion item 1.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionHeader>Item 2</AccordionHeader>
      <AccordionContent>
        Here goes the content for the accordion item 2.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionHeader>Item 3</AccordionHeader>
      <AccordionContent>
        Here goes the content for the accordion item 3.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)
