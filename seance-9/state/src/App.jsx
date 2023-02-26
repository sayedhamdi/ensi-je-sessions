import { useState } from 'react';
import { sculptureList } from './data.js';

function Gallery() {
  const [index, setIndex] = useState(0); // react hook
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}





import Element from './Element';

export default function App(){
  return (
    <div>
      <h1>App</h1>
      <Element countInitial={13}/>
      <Element countInitial={10}/>
      <hr></hr><hr></hr>
      <h1>Gallery</h1>
      <Gallery />
    </div>
  )
}

