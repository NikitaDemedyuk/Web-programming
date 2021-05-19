

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Page extends HttpServlet {
  @Override
  protected void doGet(
      HttpServletRequest request,
      HttpServletResponse response) throws ServletException, IOException {

    String path = "/WEB-INF/page.html";

    RequestDispatcher requestDispatcher = request.getRequestDispatcher(path);
    requestDispatcher.forward(request, response);
  }
}
