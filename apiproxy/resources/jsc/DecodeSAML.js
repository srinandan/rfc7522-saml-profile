 var encodedAssertion = context.getVariable("assertion");
 var grant_type       = context.getVariable("grant_type");
 
 var isValid = false;
 var errDesc = '';
 
 if (grant_type !== 'urn:ietf:params:oauth:grant-type:saml2-bearer') {
     isValid = false;
     errDesc = 'invalid grant type';
 } else {
    var decodedAssertion = Base64.decode(encodedAssertion); 
    context.setVariable("SAMLAssertion", decodedAssertion);
    isValid = true;
 }
 
 context.setVariable("isValid", isValid);
 context.setVariable("errDesc", errDesc);
