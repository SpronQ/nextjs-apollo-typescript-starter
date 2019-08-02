import React from 'react';

import {
  Anchor,
  Bold,
  Blockquote,
  Caption,
  Code,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HorizontalRule,
  Paragraph,
  Pre,
  OrderedList,
  UnorderedList,
  ListItem
} from '../../lib/components/Typography';
import {
  Section,
  SingleMeasure,
  // Column,
  ColumnDuo,
  ColumnTrio,
  ColumnQuatro,
  ColumnMain,
  ColumnSidebar
} from '../../lib/components/Layouts';

const codeExample = `body {
  color: blue;
}`;

export default () => (
  <>
    <Section>
      <SingleMeasure>
        <Heading1>Lorem ipsum dolor sit&nbsp;amet</Heading1>
        <Caption>
          Labore reprehenderit corporis ullam distinctio&nbsp;ex.
        </Caption>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <Anchor href="#">quam proident</Anchor> quis aliquam. temporibus minus
          eius veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do
          officia facilis. molestiae consequat excepturi laborum perferendis
          tempor minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
        <OrderedList>
          <ListItem>Perferendis tempor</ListItem>
          <ListItem>Minim eiusmod </ListItem>
          <ListItem>Tempor</ListItem>
          <ListItem>Minus quia sint</ListItem>
        </OrderedList>

        <Heading2>
          Voluptates mollitia quod tempore laboris&nbsp;commodi
        </Heading2>

        <Paragraph>
          Proident dolores corrupti consequatur voluptatibus labore commodi
          quos. <Bold>Incidunt mollitia</Bold> tempora assumenda laborum
          voluptate accusamus dolore optio incididunt. Maiores at duis
          consequatur corrupti consectetur, aliquam optio commodo accusamus
          distinctio, necessitatibus&nbsp;nostrum.
        </Paragraph>

        <Paragraph>
          Optio, nesciunt, quo, fugiat, blanditiis at quas excepturi quae
          maiores vel corrupti voluptate cupiditate nemo! In, eius quidem harum
          quibusdam ratione non. Iste, deleniti, fugit, voluptas aperiam qui
          adipisci provident ab accusantium possimus eveniet
          voluptate&nbsp;consectetur!
        </Paragraph>

        <Heading2>Repellat optio</Heading2>

        <Heading3>Ad perferendis omnis</Heading3>

        <Paragraph>
          Pariatur animi quis. Dolorem cupiditate{' '}
          <Anchor href="#">praesentium duis</Anchor> iusto corrupti nobis
          nostrud, exercitation consequatur. Nulla minim dignissimos
          reprehenderit voluptatem. Recusandae delectus iure vel asperiores
          saepe dolorum omnis eu aliquam&nbsp;similique.
        </Paragraph>

        <Blockquote>
          <Paragraph>
            Fuga rerum laboris officia cupidatat, excepteur aliquid ut quis
            facere, cumque harum optio dignissimos. Duis repellat tempore dolor
            blanditiis alias impedit officiis ut&nbsp;consectetur.
          </Paragraph>
        </Blockquote>

        <Pre>
          <Code>{codeExample}</Code>
        </Pre>
        <Heading4>Quibusdam illum quo</Heading4>

        <Paragraph>
          Quos laboris eos, laborum animi. Ea blanditiis ducimus fugiat officia
          nostrud consectetur recusandae excepteur. Quis qui maiores distinctio
          facilis saepe&nbsp;eos.
        </Paragraph>

        <Heading5>Consectetur nobis consequat voluptates&nbsp;eiusmod</Heading5>

        <Paragraph>
          Iure vel nostrud repellendus. <Bold>Nostrud</Bold> autem consequatur,
          provident officiis qui, mollit exercitation. Veniam minus cillum
          suscipit aliqua, tenetur. Anim mollitia necessitatibus ad quos
          consectetur voluptatem do&nbsp;<Anchor href="#">corporis</Anchor>.
        </Paragraph>

        <UnorderedList>
          <ListItem>Perferendis tempor</ListItem>
          <ListItem>Minim eiusmod </ListItem>
          <ListItem>Tempor</ListItem>
          <ListItem>Minus quia sint</ListItem>
        </UnorderedList>

        <Paragraph>
          Corporis eligendi minim, enim proident reprehenderit iusto.{' '}
          <Italic>Reprehenderit</Italic> commodo commodi, repudiandae voluptas
          saepe sint libero. Praesentium eius distinctio ullamco vero iusto
          praesentium eligendi animi. Consectetur dolore vero similique dolore,
          ut labore&nbsp;omnis.
        </Paragraph>

        <Heading6>Maxime alias anim similique</Heading6>

        <Paragraph>
          Omnis corporis assumenda nisi ullam dolores culpa repellat. Molestias
          praesentium necessitatibus minus, reiciendis officiis commodo
          incidunt. Consectetur nostrud odio numquam&nbsp;tenetur.
        </Paragraph>

        <HorizontalRule />

        <Heading1>Heading level 1</Heading1>

        <Heading2>Heading level 2</Heading2>

        <Heading3>Heading level 3</Heading3>

        <Heading4>Heading level 4</Heading4>

        <Heading5>Heading level 5</Heading5>

        <Heading6>Heading level 6</Heading6>

        <Paragraph>
          Paragraph with <Bold>bold</Bold>, <Italic>italic</Italic>,{' '}
          <Anchor href="#">link</Anchor> and <Code>code</Code> styles.
        </Paragraph>

        <Blockquote>
          <Paragraph>Blockquote</Paragraph>
        </Blockquote>

        <Caption>Caption text</Caption>

        <OrderedList>
          <ListItem>Ordered list element one</ListItem>
          <ListItem>Ordered list element two</ListItem>
          <ListItem>Ordered list element three</ListItem>
        </OrderedList>

        <UnorderedList>
          <ListItem>Unordered list element one</ListItem>
          <ListItem>Unordered list element two</ListItem>
          <ListItem>Unordered list element three</ListItem>
        </UnorderedList>
      </SingleMeasure>
    </Section>

    <Section>
      <ColumnDuo>
        <Heading1>Super long title which goes over a couple of lines</Heading1>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <Anchor href="#">quam proident</Anchor> quis aliquam. temporibus minus
          eius veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do
          officia facilis. molestiae consequat excepturi laborum perferendis
          tempor minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>
      </ColumnDuo>

      <ColumnDuo>
        <Heading3>A second column</Heading3>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
      </ColumnDuo>
    </Section>

    <Section>
      <ColumnTrio>
        <Heading6>Column one</Heading6>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <Anchor href="#">quam proident</Anchor> quis aliquam. temporibus minus
          eius veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do
          officia facilis. molestiae consequat excepturi laborum perferendis
          tempor minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>
      </ColumnTrio>

      <ColumnTrio>
        <Heading6>Column two</Heading6>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
      </ColumnTrio>

      <ColumnTrio>
        <Heading6>Column three</Heading6>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
      </ColumnTrio>
    </Section>
    <Section>
      <ColumnQuatro>
        <Heading6>Column one</Heading6>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <Anchor href="#">quam proident</Anchor> quis aliquam. temporibus minus
          eius veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do
          officia facilis. molestiae consequat excepturi laborum perferendis
          tempor minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>
      </ColumnQuatro>

      <ColumnQuatro>
        <Heading6>Column two</Heading6>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
      </ColumnQuatro>

      <ColumnQuatro>
        <Heading6>Column three</Heading6>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
      </ColumnQuatro>

      <ColumnQuatro>
        <Heading6>Column four</Heading6>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
      </ColumnQuatro>
    </Section>
    <Section>
      <ColumnMain>
        <Heading6>Main column</Heading6>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <Anchor href="#">quam proident</Anchor> quis aliquam. temporibus minus
          eius veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do
          officia facilis. molestiae consequat excepturi laborum perferendis
          tempor minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <Anchor href="#">quam proident</Anchor> quis aliquam. temporibus minus
          eius veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do
          officia facilis. molestiae consequat excepturi laborum perferendis
          tempor minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>
      </ColumnMain>
      <ColumnSidebar>
        <Heading6>Sidebar</Heading6>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
      </ColumnSidebar>
    </Section>
    <Section>
      <ColumnSidebar>
        <Heading6>Sidebar</Heading6>
        <Paragraph>
          Quos atque officia quod. <Italic>Suscipit delectus</Italic> cupidatat,
          quia nulla numquam aute cillum proident. Maiores iusto culpa molestias
          quam id tenetur saepe impedit reiciendis itaque ducimus itaque
          nostrud. Tempor aliquip, culpa earum itaque sed consequatur minus
          aliquip reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
      </ColumnSidebar>
      <ColumnMain>
        <Heading6>Main column</Heading6>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <Anchor href="#">quam proident</Anchor> quis aliquam. temporibus minus
          eius veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do
          officia facilis. molestiae consequat excepturi laborum perferendis
          tempor minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <Anchor href="#">quam proident</Anchor> quis aliquam. temporibus minus
          eius veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do
          officia facilis. molestiae consequat excepturi laborum perferendis
          tempor minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>
      </ColumnMain>
    </Section>
  </>
);
