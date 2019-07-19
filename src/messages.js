export default {
  'about.title': 'PAHMA CollectionSpace',
  'about.contentHTML': `
    <p>
      Collections management system of the Phoebe A. Hearst Museum of Anthropology.
    </p>
    <p>
      This service is supported by UC Berkeley <a href="http://research-it.berkeley.edu/">Research IT</a>.
      To send feedback, report bugs, or request support, email
      <a href="mailto:cspace-support@lists.berkeley.edu">cspace-support@lists.berkeley.edu</a>.
    </p>`,

  'footer.feedback': 'Contact UC Berkeley CollectionSpace support',
  'footer.feedbackUrl': 'mailto:cspace-support@lists.berkeley.edu',

  'createPage.procedure': 'Actions',
  'record.procedure.name': 'Action',
  'record.procedure.collectionName': 'Actions',
  'record.authority.collectionName': 'Authority Terms',

  // acquisition

  'record.aquisition.name': 'Accession',
  'record.acquisition.collectionName': 'Accessions',
  'panel.acquisition.info': 'Accession Information',
  'field.acquisitions_common.acquisitionReferenceNumber.name': 'Accession number',
  'field.acquisitions_common.acquisitionNote.name': 'Accession note',
  'field.acquisitions_common.acquisitionReason.name': 'Accession reason',
  'field.acquisitions_common.acquisitionProvisos.name': 'Accession provisos',

  // collection object

  'field.collectionobjects_common.briefDescription.name': 'Description',
  'field.collectionobjects_common.objectNumber.name': 'Museum number',
  'field.collectionobjects_common.numberOfObjects.name': 'Number of pieces',
  'field.collectionobjects_common.comment.name': 'Object comment',
  'field.collectionobjects_common.materialComponentNote.fullName': 'Material note',
  'field.collectionobjects_common.materialComponentNote.name': 'Note',
  'field.collectionobjects_common.computedCurrentLocation.name': 'Current storage location',
  'field.collectionobjects_common.fieldCollectionSource.name': 'Field collection source (person or cultural group)',
  // TODO: Make the parenthetical a separate prop
  'field.collectionobjects_common.assocPeopleGroup.name': 'Associated cultural group (excl. production culture and culture depicted)',
  'field.collectionobjects_common.assocPeople.fullName': 'Associated cultural group',
  'field.collectionobjects_common.assocPeople.name': 'Cultural group',
  'field.collectionobjects_common.sex.name': 'Sex determination',
  'field.collectionobjects_common.responsibleDepartment.name': 'Responsible collection manager',
  'field.collectionobjects_common.phase.name': 'Phase or biological age group',
  'field.collectionobjects_common.form.name': 'Form (as stored)',
  'field.collectionobjects_naturalhistory.taxon.fullName': 'Taxonomic name',
  'field.collectionobjects_naturalhistory.taxon.name': 'Name',
  'field.collectionobjects_naturalhistory.identKind.name': 'Kind',
  'field.collectionobjects_common.contentActivity.name': 'Activity depicted',
  'field.collectionobjects_common.contentConcept.name': 'Concept depicted',
  'field.collectionobjects_common.contentDateGroup.name': 'Date depicted',
  'field.collectionobjects_common.contentObjectGroup.name': 'Object depicted',
  'field.collectionobjects_common.contentPeople.name': 'Cultural group depicted',
  'field.collectionobjects_common.contentPerson.name': 'Person depicted',
  'field.collectionobjects_common.contentPlace.name': 'Place depicted',
  'field.collectionobjects_common.contentOrganization.name': 'Organization depicted',
  'field.collectionobjects_common.contentEventNameGroup.name': 'Event depicted',
  'field.collectionobjects_common.contentOtherGroup.name': 'Other depicted',
  'field.collectionobjects_common.usageGroup.name': 'Context of use',
  'field.collectionobjects_common.collection.name': 'Object type',
  'field.collectionobjects_common.inscriptionContentMethod.name': 'Inscription method',
  'field.collectionobjects_common.inscriptionContentPosition.name': 'Inscription position',
  // TODO: Make the parenthetical a separate prop
  'field.collectionobjects_common.assocObjectGroup.name': 'Associated object (excl. cataloged or depicted objects)',
  // TODO: Make the parenthetical a separate prop
  'field.collectionobjects_common.assocPersonGroup.name': 'Associated person (excl. makers, owners)',
  // TODO: Make the parenthetical a separate prop
  'field.collectionobjects_common.assocPlaceGroup.name': 'Associated place (excl. field collection place, production place and place depicted)',
  'field.collectionobjects_common.assocEventPeople.name': 'Associated event cultural group',
  'field.collectionobjects_common.objectProductionPeopleGroup.name': 'Production cultural group',
  'field.collectionobjects_common.objectProductionPeople.fullName': 'Production cultural group',
  'field.collectionobjects_common.objectProductionPeople.name': 'Cultural group',
  'field.collectionobjects_naturalhistory.reference.name': 'Reference',
  'panel.collectionobject.content': 'Content Depicted',
  'panel.collectionobject.reference': 'Bibliographic Reference Information',
  'column.collectionobject.default.objectNumber': 'Museum number',
  'column.collectionobject.narrow.objectNumber': 'Number',

  // concept

  'vocab.concept.activity.collectionName': 'Activities',
  'vocab.concept.material.collectionName': 'Materials',
  'field.concepts_common.historicalStatus.name': 'Current?',

  // contact

  'field.contacts_common.addressGroup.name': 'Postal address',

  // intake

  'record.intake.name': 'Object Entry',
  'record.intake.collectionName': 'Object Entries',
  'field.intakes_common.currentLocation.fullName': 'Storage location',
  'field.intakes_common.currentLocationGroup.name': 'Storage location',
  'field.intakes_common.entryNumber.name': 'Object entry number',
  'field.intakes_common.returnDate.name': 'Actual return date',
  'field.intakes_common.fieldCollectionSource.name': 'Field collection source (person or cultural group)',
  'field.intakes_common.normalLocation.name': 'Home location',

  // group

  'field.groups_common.responsibleDepartment.name': 'Purpose',

  // loan out

  'record.loanout.name': 'Out Loan',
  'record.loanout.collectionName': 'Out Loans',
  'panel.loanout.info': 'Outgoing Loan Information',
  'field.loansout_common.loanOutNumber.name': 'Loan number',
  'field.loansout_common.lendersAuthorizer.name': 'PAHMA authorizer',
  'field.loansout_common.lendersAuthorizer.fullName': 'PAHMA authorizer',
  'field.loansout_common.lendersContact.name': 'PAHMA contact',
  'field.loansout_common.lendersContact.fullName': 'PAHMA contact',

  // condition check

  'field.conditionchecks_common.conditionCheckNote.name': 'Condition note',
  'field.conditionchecks_common.condition.fullName': 'Condition',
  'panel.conditioncheck.objectRequirementInfo': 'Object Requirement and Handling Information',

  // dimension

  'field.ext.dimension.measuredPart.name': 'Part measured',

  // location

  'vocab.location.local.name': 'PAHMA',
  'vocab.location.local.collectionName': 'PAHMA Storage Locations',
  'option.locationTermStatuses.accepted': 'active',
  'option.locationTermStatuses.rejected': 'inactive',

  // object exit

  'field.objectexit_common.depositor.name': 'Recipient',

  // Movement

  'field.movements_common.locationDate.name': 'Inventory/move date',
  'field.movements_common.currentLocation.fullName': 'Storage location',
  'field.movements_common.reasonForMove.name': 'Reason',
  'field.movements_common.movementMethod.name': 'Method',
  'inputTable.movement.currentLocation': 'Storage location',
  'record.movement.name': 'Inventory/Movement',
  'record.movement.collectionName': 'Inventory/Movement',
  'panel.movement.location': 'Inventory/Movement Information',

  // media

  'field.media_common.identificationNumber.name': 'Media rendition number (or Museum number)',
  'field.media_common.description.name': 'Note',
  'record.media.name': 'Media',
  'record.media.collectionName': 'Media',

  // loan in

  'record.loanin.name': 'In Loan',
  'record.loanin.collectionName': 'In Loans',
  'panel.loanin.info': 'Incoming Loan Information',
  'field.loansin_common.loanInNumber.name': 'Loan number',
  'field.loansin_common.borrowersContact.name': 'PAHMA contact',
  'field.loansin_common.borrowersContact.fullName': 'PAHMA contact',
  'field.loansin_common.borrowersAuthorizer.name': 'PAHMA authorizer',
  'field.loansin_common.borrowersAuthorizer.fullName': 'PAHMA authorizer',
  'field.loansin_common.loanInConditions.name': 'Loan conditions',
  'field.loansin_common.loanInNote .name': 'Loan note',

  // organization

  'vocab.organization.local.name': 'PAHMA',
  'vocab.organization.local.collectionName': 'PAHMA Organizations',
  'field.organizations_common.foundingDateGroup.name': 'Founding date',
  'field.organizations_common.foundingPlace.name': 'Founding place',
  'field.organizations_common.group.name': 'Cultural group',
  'field.organizations_common.contactName.name': 'Related person',

  // person

  'vocab.person.local.name': 'PAHMA',
  'vocab.person.local.collectionName': 'PAHMA Persons',
  'field.persons_common.group.name': 'Cultural group',

  // place

  'vocab.place.local.name': 'PAHMA',
  'vocab.place.local.collectionName': 'PAHMA Places',
  'field.places_common.historicalStatus.name': 'Current?',

  // taxon

  'vocab.taxon.local.name': 'PAHMA',
  'vocab.taxon.local.collectionName': 'PAHMA Taxonomic Names',
  'option.taxonomicStatuses.valid': 'current',
  'option.taxonomicStatuses.invalid': 'obsolete',


  // uoc

  'field.uoc_common.method.name': 'Type of use',
  'field.uoc_common.materialType.name': 'Research type',
  'field.uoc_common.useDateGroup.name': 'Visit date',
};
