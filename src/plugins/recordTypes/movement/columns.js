import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    movementReferenceNumber: {
      disabled: true,
    },
    computedSummary: {
      messages: defineMessages({
        label: {
          id: 'column.movement.default.computedSummary',
          defaultMessage: 'Summary',
        },
      }),
      order: 20,
      sortBy: 'movements_anthropology:computedSummary',
      width: 250,
    },
  },
});
