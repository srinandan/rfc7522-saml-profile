   /*
 {
  "issued_at": "",
  "application_name": "",
  "scope": "",
  "status": "",
  "api_product_list": "[]",
  "expires_in": "",
  "developer.email": "",
  "token_type": "BearerToken",
  "client_id": "",
  "access_token": "",
  "organization_name": "",
  "refresh_token_expires_in": "0",
  "refresh_count": "0"
}
 */
 
 var response = {
    "issued_at": (new Date()).getTime(), 
    "application_name": context.getVariable("apigee.developer.app.name"),
    "scope": "",
    "status": "approved",
    "api_productlist": "",
    "expires_in": "",
    "developer.email": context.getVariable("apigee.developer.email"),
    "token_type": "BearerToken",
    "client_id": context.getVariable("apigee.client_id"),
    "access_token": context.getVariable("apigee.access_token"),
    "organization_name": context.getVariable("organization.name"),
    "refresh_token_expires_in": "0",
    "refresh_count": "0"
 };
 
 context.setVariable("request.header.Content-Type","application/json");
 context.setVariable("request.header.Cache-Control","no-store");
 context.setVariable("request.content", JSON.stringify(response));