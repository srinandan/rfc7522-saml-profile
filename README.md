## <a name="intro"></a>Intro
This repository contains Apigee Edge API Proxy that implements SAML
Profile for OAuth 2.0 Client Authentication and Authorization Grants
(RFC7522). You can read more about the RFC [here](https://tools.ietf.org/html/rfc7522)

## <a name="setup"></a>Setting Up
1. Create a Trust Store. Please refer [here](http://docs.apigee.com/management/apis/post/organizations/%7Borg_name%7D/environments/%7Benv_name%7D/keystores)
2. Upload a certificate to the Trust Store. Please refer  [here](http://docs.apigee.com/management/apis/post/organizations/%7Borg_name%7D/environments/%7Benv_name%7D/keystores/%7Bkeystore_name%7D/certs)

## <a name="setup"></a>About the Sample
RFC7522 supports two mechanisms for obtaining an OAuth token.

1. Using SAML Assertion as Authorization Grants
    The following example demonstrates an access token request with a JWT
    as an authorization grant (with extra line breaks for display
    purposes only):
    ```
    POST /token.oauth2 HTTP/1.1
    Host: as.example.com
    Content-Type: application/x-www-form-urlencoded

    grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Asaml2-bearer&
    assertion=PHNhbWxwOl...[omitted for brevity]...ZT4
    ```
2. Using SAML Assertion for Client Authentication
   The following example demonstrates a client authenticating using an
   Assertion during the presentation of an authorization code grant in
   an access token request (with extra line breaks for display purposes
   only):
   ```
     POST /token.oauth2 HTTP/1.1
     Host: as.example.com
     Content-Type: application/x-www-form-urlencoded

     grant_type=authorization_code&
     code=n0esc3NRze7LTCu7iYzS6a5acc3f0ogp4&
     client_assertion_type=urn%3Aietf%3Aparams%3Aoauth
     %3Aclient-assertion-type%3Asaml2-bearer&
     client_assertion=PHNhbW...[omitted for brevity]...ZT
    ```
