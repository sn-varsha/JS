const sampleWeatherDataString = "{\"location\" : {\"city\" : \"San Francisco\",\"country\":\"USA\"},\"current\":{\"temp\":68,\"feels_like\":70,\"humidity\":75,\"conditions\":\"sunny\",\"icon\":\"sun\"},\"daily\":[{\"day\":\"Today\",\"high\":72,\"low\":58,\"conditions\":\"clear\"},{\"day\":\"Tomorrow\",\"high\":70,\"low\":56,\"condtions\":\"partly cloudy\"}]}";

const parsedData=JSON.parse(sampleWeatherDataString);
console.log(parsedData);
console.log(parsedData.location);
console.log(parsedData.location.city);
console.log(parsedData.daily[0].high);

const response = {
    success : true,
    message : "data received"
};

const jsonString = JSON.stringify(response);
console.log(jsonString);