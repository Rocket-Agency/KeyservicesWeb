const ImgDefault = () => {
    // ...
  
    return (
      <>
        <img
          class="image"
          src="./Images/placeholder.png"
          alt="There's no magic"
        />
        <noscript>
          <img
            class="image"
            src="./Images/GererMesLocations.png"
            alt="The magic begins in here..."
          />
        </noscript>
      </>
    );
  };