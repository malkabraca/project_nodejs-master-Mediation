const Card = require("./Card");

const createCard = (cardToSave) => {
  let card = new Card(cardToSave);
  return card.save();
};

const getAllCards = () => {
  return Card.find();
};

const getCardById = (id) => {
  return Card.findById(id);
};
const getCardByBizNumber = (bizNumber) => {
  return Card.findOne({ bizNumber }, { bizNumber: 1, _id: 0 });
};

const updateCard = (id, cardToUpdate) => {
  normaliz(cardToUpdate)
  return Card.findByIdAndUpdate(id, cardToUpdate, {
    new: true,
  });
};

const deleteCard = (id) => {
  return Card.findByIdAndDelete(id);
};

const updateCardBiz = async (bizNumber, bizNumberToUpdat) => {
  const update = {
    $set: {
      bizNumber: bizNumberToUpdat
    }
  }
  return Card.findOneAndUpdate({ bizNumber }, update, {
    new: true,
  });
}; 


const getCardByUserId = (userId) => {
  return Card.find({ user_id: userId });
};

module.exports = {
  createCard,
  getAllCards,
  getCardById,
  getCardByBizNumber,
  updateCard,
  deleteCard,
  getCardByUserId,
  updateCardBiz
};
