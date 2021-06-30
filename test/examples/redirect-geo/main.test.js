import {onClientRequest} from "../../../src/examples/redirect-geo/main";
import Request from "request.js";

test("onClientRequest calling respondWith", () => {
    let requestMock = new Request();
    requestMock.host = "www.example.com";
    onClientRequest(requestMock);
    expect(requestMock.respondWith).toHaveBeenCalled();
    expect(requestMock.respondWith).toHaveBeenCalledTimes(1);
    expect(requestMock.respondWith).toHaveBeenCalledWith(302, {
        Location: [requestMock.scheme + '://' + 'www.example.ca' + requestMock.url]
      }, '');
  });

  