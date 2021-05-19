package servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.IOException;

@MultipartConfig
public class UploadImageServlet extends HttpServlet {

  @Override
  protected void doPost(
    HttpServletRequest request,
    HttpServletResponse response) throws ServletException, IOException {

    for (Part part : request.getParts()) {

    }

  }
}