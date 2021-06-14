import { Component, OnInit } from '@angular/core';
import AirlineService from '../Services/AirlineService';
import Airline from '../Entity/Airline';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent{

  constructor(private airlineService:AirlineService,private httpClient: HttpClient) { }
  airline:Airline = new Airline();
  airlines:Airline[]=[];

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  save(){
    console.log("saved "+this.airline.airline_name);
    const promise = this.airlineService.save(this.airline);
    promise.subscribe(function(response){
      console.log(response);
      alert('Saved Successfully');
    },
    function(error){
      alert(error.message);
    });
  }

  clearForm(){
    this.airline.airline_name='';
    this.airline.airline_logo='';
    this.airline.airline_contact='';
    this.airline.airline_address='';
  }


  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
  

}
function clearForm2() {
  throw new Error('Function not implemented.');
}

