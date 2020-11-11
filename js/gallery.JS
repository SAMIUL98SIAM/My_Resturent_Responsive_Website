function upDate(previewPic){
    /*element = document.getElementById("image");
    element.style.backgroundImage = "url('" + previewPic.src + "')";
    element.innerHTML = previewPic.alt;*/
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt ; 
}


    function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
     document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover Over!!"; 
        
    }

   //2
    function billingFunction(){
  if(document.getElementById('same').checked){
    //Completes the billing information as per shipping information.
    document.getElementById('billingName').value = document.getElementById('shippingName').value;
    document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
  }
  else{
    //Clears any presets on click.
    document.getElementById('billingName').value = "";
    document.getElementById('billingZip').value = "";
    //Removes the required attribute.
    document.getElementById('billingName').removeAttribute('required');
    document.getElementById('billingZip').removeAttribute('required');
  }
}