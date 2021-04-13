const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="placeTermGroupList">
          <Field name="placeTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="historicalStatus" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <Row>
                <Field name="nameAbbrev" />
                <Field name="nameNote" />
                <Field name="nameDateGroup" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="anthropologyPlaceTypes" subpath="ns2:places_anthropology">
            <Field name="anthropologyPlaceType" />
          </Field>

          <Col />
        </Row>

        <Field name="anthropologyPlaceOwnerGroupList" subpath="ns2:places_anthropology">
          <Field name="anthropologyPlaceOwnerGroup">
            <Field name="anthropologyPlaceOwner" />
            <Field name="anthropologyPlaceOwnershipStartDateGroup" />
            <Field name="anthropologyPlaceOwnershipEndDateGroup" />
            <Field name="anthropologyPlaceOwnershipNote" />
          </Field>
        </Field>

        <Field name="placeNoteGroupList" subpath="ns2:places_anthropology">
          <Field name="placeNoteGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="placeNoteText" />
                </Col>

                <Col>
                  <Field name="placeNoteAuthor" />
                  <Field name="placeNoteDate" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>

        <Field name="placeReferenceGroupList" subpath="ns2:places_anthropology">
          <Field name="placeReferenceGroup">
            <Field name="placeReference" />
            <Field name="placeReferenceNote" />
          </Field>
        </Field>

        <Field name="placeAssocGroupList" subpath="ns2:places_anthropology">
          <Field name="placeAssocGroup">
            <Field name="placeAssocName" />
            <Field name="placeAssociation" />
            <Field name="placeAssocDateGroup" />
            <Field name="placeAssocNote" />
          </Field>
        </Field>

        {extensions.address.form}
      </Panel>

      <Panel name="research" collapsible collapsed>
        <Field name="basicInfoList" subpath="ns2:places_pahma">
          <Field name="basicInfo" />
        </Field>
        <Field name="inventoryHistoryList" subpath="ns2:places_pahma">
          <Field name="inventoryHistory" />
        </Field>

        <Field name="backgroundSummaryList" subpath="ns2:places_pahma">
          <Field name="backgroundSummary" />
        </Field>

        <Field name="landOwnershipList" subpath="ns2:places_pahma">
          <Field name="landOwnership" />
        </Field>
      </Panel>

      <Panel name="culturalAffiliation" collapsible collapsed>
        <Field name="geographicInfoList" subpath="ns2:places_pahma">
          <Field name="geographicInfo" />
        </Field>

        <Field name="kinshipEvidenceList" subpath="ns2:places_pahma">
          <Field name="kinshipEvidence" />
        </Field>

        <Field name="biologicalEvidenceList" subpath="ns2:places_pahma">
          <Field name="biologicalEvidence" />
        </Field>

        <Field name="archaeologicalEvidenceList" subpath="ns2:places_pahma">
          <Field name="archaeologicalEvidence" />
        </Field>

        <Field name="anthropologicalEvidenceList" subpath="ns2:places_pahma">
          <Field name="anthropologicalEvidence" />
        </Field>

        <Field name="linguisticEvidenceList" subpath="ns2:places_pahma">
          <Field name="linguisticEvidence" />
        </Field>

        <Field name="oralTraditionList" subpath="ns2:places_pahma">
          <Field name="oralTradition" />
        </Field>

        <Field name="historicalInfoList" subpath="ns2:places_pahma">
          <Field name="historicalInfo" />
        </Field>

        <Field name="otherInfoList" subpath="ns2:places_pahma">
          <Field name="otherInfo" />
        </Field>

        <Field name="consultationSummaryList" subpath="ns2:places_pahma">
          <Field name="consultationSummary" />
        </Field>

      </Panel>

      <Panel name="docsConsulted" collapsible collapsed>

        <Field name="museumRecords" subpath="ns2:places_pahma" />

        <Field name="unpublishedManuscriptGroupList" subpath="ns2:places_pahma">
          <Field name="unpublishedManuscriptGroup">
            <Field name="unpublishedManuscriptReference" />
            <Field name="unpublishedManuscriptNote" />
          </Field>
        </Field>

        <Field name="publishedReportsGroupList" subpath="ns2:places_pahma">
          <Field name="publishedReportsGroup">
            <Field name="publishedReportsReference" />
            <Field name="publishedReportsNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="localityInfo" collapsible collapsed>
        <Row>
          <Field name="vCoordinates" />
          <Field name="vLatitude" />
          <Field name="vLongitude" />
          <Field name="vCoordSys" />
        </Row>

        <Row>
          <Field name="vElevation" />
          <Field name="vUnitofMeasure" />
          <Col />
          <Col />
        </Row>

        <Row>
          <Field name="township" subpath="ns2:places_anthropology" />
          <Field name="range" subpath="ns2:places_anthropology" />
          <Field name="section" subpath="ns2:places_anthropology" />
          <Field name="verbatimQuarterSection" subpath="ns2:places_pahma" />
        </Row>

        <Row>
          <Field name="vCoordSource" />
          <Field name="vCoordSourceRefId" />
        </Row>
      </Panel>

      <Panel name="geoRefInfo" collapsible collapsed>
        <Field name="placeGeoRefGroupList">
          <Field name="placeGeoRefGroup">
            <Panel>
              <Row>
                <Field name="decimalLatitude" />
                <Field name="decimalLongitude" />
                <Field name="geodeticDatum" />
                <Field name="coordUncertaintyInMeters" />
                <Field name="coordPrecision" />
              </Row>

              <Row>
                <Field name="pointRadiusSpatialFit" />
                <Field name="footprintWKT" />
                <Field name="footprintSRS" />
                <Field name="footprintSpatialFit" />
              </Row>

              <Row>
                <Field name="geoReferencedBy" />
                <Field name="geoRefDateGroup" />
                <Field name="geoRefProtocol" />
                <Field name="geoRefSource" />
                <Field name="geoRefVerificationStatus" />
              </Row>

              <Row>
                <Field name="geoRefRemarks" />
                <Field name="geoRefPlaceName" />
              </Row>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
