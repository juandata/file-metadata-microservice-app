File-Metadata-Microservice-App
=================

A `full stack` JavaScript app that allows you to upload a file and check its size in another endpoint.

**Description**:
This is one of the 10 FreeCodeCamp challenges designed to get the FCC backend certification. You can check the specific requirements here: [https://www.freecodecamp.org/challenges/file-metadata-microservice](https://www.freecodecamp.org/challenges/file-metadata-microservice)

This microservices is a `full stack` JavaScript App that allows you to upload a file via an HTML form and get the file size in another API endpoint. 

**User Stories**:
 - I can submit a FormData object that includes a file upload.
 - I can paginate through the responses by adding a ?offset=2 parameter to the URL.
 - I can get a list of the most recently submitted search strings.

Example Creation Usage 
------------

 **Search an image with a query:**
 
 [https://image-search-abstraction-layer-app.glitch.me/api/imagesearch/say%20it%20again%20meme?offset=1](https://image-search-abstraction-layer-app.glitch.me/api/imagesearch/say%20it%20again%20meme?offset=1)

 **Response**
- 10 Json Objects containing the image url, snippet, thumbnail and context info of your query. 
Hint,
- At the end of your query add **?offset='x'** where **X** is the page number to be retrieved by the API 

 **Get last 10 queries**
 
 [https://image-search-abstraction-layer-app.glitch.me/api/latest/imagesearch/](https://image-search-abstraction-layer-app.glitch.me/api/latest/imagesearch/)
- 10 Json Objects containing the image url, snippet, thumbnail and context info of your query. 

 **Response**
 - The last 10 queries made to the API. 

 ------------
Made by [Juan David Tabares Arce](https://juandavidarce.co/)
-------------------
