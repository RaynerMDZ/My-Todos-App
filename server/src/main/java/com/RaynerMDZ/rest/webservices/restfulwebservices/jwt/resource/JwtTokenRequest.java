package com.RaynerMDZ.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
  private String password;

//  {
//    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU0ODc5NTU0NCwiaWF0IjoxNTQ4MTkwNzQ0fQ.4lFFRzMc6bwQqsm-G6DxG75RGU88cPqnfh_qBnumlnvP0t9Vt8sxanvF-paRpU9strsQtpkPd423gqWQPsvajQ"
//  }



  public JwtTokenRequest() {
    super();
  }

  public JwtTokenRequest(String username, String password) {
    this.setUsername(username);
    this.setPassword(password);
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
