 var isValid = false;
 var errDesc = "";
 
 var sub = context.getVariable("saml.subject");
 
 //the rfc specifies that subject must be present.
 if (sub === null || sub === '') {
    isValid = false;
    errDesc = 'SAML missing subject';
 } else {
     isValid = true;
 }
 
 //TODO: The Assertion MUST contain a <Conditions> element with an <AudienceRestriction> element with an <Audience> element
 //TODO: The <Subject> element MUST contain at least one <SubjectConfirmation> element that has a Method attribute with a 
    //   value of "urn:oasis:names:tc:SAML:2.0:cm:bearer"
 
 
 context.setVariable("isValid", isValid);
 context.setVariable("errDesc", errDesc);