import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    AutocompleteInput,
    DateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      StaffName: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUoCbyTypeOfUse.StaffName.name',
              defaultMessage: 'Staff name',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local',
              showQuickAdd: false,
            },
          },
        },
      },
      VisitStartDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUoCbyTypeOfUse.VisitStartDate.name',
              defaultMessage: 'Visit start date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      VisitEndDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUoCbyTypeOfUse.VisitEndDate.name',
              defaultMessage: 'Visit end date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
    },
  };
};
