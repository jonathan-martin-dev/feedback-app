// import PropTypes from "prop-types";
import { useContext } from 'react';
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <AnimatePresence>
      <div className="feedback-list">
        {feedback.map((item) => (
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}} >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //     ))}
  //   </div>
  //   );
};

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
