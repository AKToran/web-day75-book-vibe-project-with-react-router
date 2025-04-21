import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div>
      details
    </div>
  );
};

export default BookDetails;