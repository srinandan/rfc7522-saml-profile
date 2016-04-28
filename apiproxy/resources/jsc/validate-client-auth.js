  var cert             = context.getVariable("cert");
 var encodedAssertion  = context.getVariable("client_assertion");
 var assertionType = context.getVariable("client_assertion_type");
 var code          = context.getVariable("code");

 var isValid       = false;
 var errDesc       = '';
 
 if (cert === null) {
    cert = context.getVariable("publiccert.content");
 }
 
 if (assertionType === "urn:ietf:params:oauth:client-assertion-type:saml2-bearer") {
    if (encodedAssertion !== null || encodedAssertion !== '') {
        var decodedAssertion = Base64.decode(encodedAssertion); 
        context.setVariable("SAMLAssertion", decodedAssertion);
        isValid = true;
        
    } else {
        isValid = false;
        errDesc = 'assertion empty or not sent';
    }
 } else {
    isValid = false;
    errDesc = 'invalid client assertion type';
 }
 
 context.setVariable("isValid", isValid);
 context.setVariable("errDesc", errDesc);
 