import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./BookDetails.css";

const URL = "http://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBookDetails() {
      setLoading(true);
      try {
        const response = await fetch(`${URL}${id}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        console.log('Book data:', data); // Debugging line

        if (data) {
          const {
            description,
            title,
            covers,
            authors,
            publishers,
            number_of_pages,
            publish_date,
            subject_places,
            subject_times,
            subjects,
          } = data;

          let authorDetails = "No author found";
          const bookData = {
    title: "The Lost World",
    description: "Journalist Ed Malone is looking for an adventure...",
    authors: [
        {
            author: {
                key: "/authors/OL161167A"
            }
        }
    ],
    first_publish_date: "December 1, 2005"
};

// Display the book details
console.log("Title: " + bookData.title); // Display the title
console.log("Description: " + bookData.description); // Display the description

// Display the author(s)
if (bookData.authors && bookData.authors.length > 0) {
    bookData.authors.forEach((authorObj, index) => {
        console.log("Author " + (index + 1) + " key: " + authorObj.author.key);
    });
} else {
    console.log("Author information not available.");
}

// Display the publish date
console.log("First Published Date: " + bookData.first_publish_date);

          const newBook = {
            description: typeof description === 'object' ? description?.value : description || "No description found",
            title: title || "No title available",
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            author: authorDetails,
            publishers: publishers?.join(", ") || "No publishers found",
            number_of_pages: number_of_pages || "Page count not available",
            publish_date: publish_date || "Publish date not available",
            subject_places: subject_places?.join(", ") || "No subject places found",
            subject_times: subject_times?.join(", ") || "No subject times found",
            subjects: subjects?.join(", ") || "No subjects found",
          };

          setBook(newBook);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.error('Error:', error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    }

    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  if (!book) {
    return <div className="book-details-error">Book details not found.</div>;
  }

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book.cover_img} alt="cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book.description}</span>
            </div>
            {/* {book.author && (
              <div className='book-details-item'>
                <span className='fw-6'>Author(s): </span>
                <span>{book.author}</span>
              </div>
            )}
            {book.publishers && (
              <div className='book-details-item'>
                <span className='fw-6'>Publishers: </span>
                <span>{book.publishers}</span>
              </div>
            )}
            {book.number_of_pages && (
              <div className='book-details-item'>
                <span className='fw-6'>Number of Pages: </span>
                <span>{book.number_of_pages}</span>
              </div> */}
            {/* )} */}
            {book.publish_date && (
              <div className='book-details-item'>
                <span className='fw-6'>Publish Date: </span>
                <span>{book.publish_date}</span>
              </div>
            )}
            {book.subject_places && (
              <div className='book-details-item'>
                <span className='fw-6'>Subject Places: </span>
                <span className='text-italic'>{book.subject_places}</span>
              </div>
            )}
            {book.subject_times && (
              <div className='book-details-item'>
                <span className='fw-6'>Subject Times: </span>
                <span className='text-italic'>{book.subject_times}</span>
              </div>
            )}
            {book.subjects && (
              <div className='book-details-item'>
                <span className='fw-6'>Subjects: </span>
                <span>{book.subjects}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
