//const Beers_REST_API =
"https://7h4i2kxk5b.execute-api.us-west-2.amazonaws.com/";
const Beers_REST_API = "http://localhost:8080/";
// const API='https://google.com';

var myHeaders = new Headers();
myHeaders.append(
  "x-amz-target",
  "com.amazon.awsswaybackendservices.AWSSwayBackendServices.GetAllBeers"
);
myHeaders.append("Accept-Charset", "utf-8");
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json; charset=utf-8");
myHeaders.append("Content-Encoding", "amz-1.0");

var raw =
  '{"name":"Best Beer2","beerCompanyName":"Just the best beer3","beerTypeName":"bear beer3"}';

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

class APIService {
  getBeers() {
    return fetch(Beers_REST_API, requestOptions);
    //.then(response => response.json());
    // .then(response => response.text())
    //.then(result => console.log(result))
    //.catch(error => console.log('error', error));
  }
}

export default new APIService();

// class APIService {
//   getBeers(){
//       return fetch(Beers_REST_API,{
//           method: 'POST',
//               headers: {
//               'Accept': 'application/json; text/plain; */*',
//               'x-amz-target':'com.amazon.awsswaybackendservices.AWSSwayBackendServices.GetAllBeers',
//               'Accept-Charset':'utf-8',
//               'Content-Type':'application/json; charset=utf-8',
//               'Content-Encoding':'amz-1.0'
//               },
//               'credentials': 'same-origin'
//       })
//       .then(res => res.json());
//   }
// }
