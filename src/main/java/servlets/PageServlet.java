package servlets;

import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class PageServlet extends TweetServlet {

  @Override
  protected void doPost(
    HttpServletRequest request,
    HttpServletResponse response) throws IOException {

    Map<String, Object> filterConfig =
      (new JSONObject(request.getParameter("filter"))).toMap();

    List<Map<String, Object>> page = tweets.getPage(filterConfig);
    JSONObject jsonResponse = new JSONObject(page);

    response.getOutputStream().println(jsonResponse.toString());
  }
}
