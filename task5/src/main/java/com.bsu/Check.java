package com.bsu;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Check extends HttpServlet {
  @Override
  protected void doPost(
      HttpServletRequest request,
      HttpServletResponse response) throws IOException {

    String answer = "{\"success\": true}";

    response.setContentType("application/json");
    response.getOutputStream().println(answer);
  }
}