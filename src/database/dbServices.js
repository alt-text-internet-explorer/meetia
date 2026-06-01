import User from "./userSchema.js"
import Review from "./reviewSchema.js"
import Collection from "./collectionSchema.js"
import Customize from "./customizeProfile.js"

// User functions
export async function createUser(userData) {
  const user = new User(userData)

  return await user.save()
}

export async function getUserByUsername(uname) {
  return User.findOne({
    username: uname,
  })
}

export async function getUsernameByID(id) {
  return User.findOne({
    _id: id,
  }).username
}

export async function deleteUserByUsername(uname) {
  return User.deleteOne({
    username: uname,
  })
}

export async function updateUserByUsername(uname, param, updateTo) {
  return User.updateOne({ username: uname }, { [param]: updateTo })
}

//Social functions
export async function addFriend(uname, friend_id) {
  User.updateOne({ username: uname }, { $push: { friends: friend_id } })
}

export async function getFriends(uname) {
  return await User.findOne({
    username: uname,
  }).select("friends")
}

//Review functions
export async function createReview(reviewData) {
  const rev = new Review(reviewData)

  return await rev.save()
}

export async function getReviewById(id) {
  return Review.findOne({
    _id: id,
  })
}

export async function deleteReviewById(id) {
  return Review.deleteOne({
    _id: id,
  })
}

export async function updateReviewById(id, param, updateTo) {
  return Review.updateOne({ _id: id }, { [param]: updateTo })
}

export async function getAllReviews() {
  return Review.find({})
}

export async function getReviewsFromUID(id) {
  return Review.find({
    owner_id: id,
  })
}

//Collection functions
export async function createCollection(collectionData) {
  const col = new Collection(collectionData)

  return await col.save()
}

export async function getCollectionById(id) {
  return Collection.findOne({
    _id: id,
  })
}

export async function deleteCollectionById(id) {
  return Collection.deleteOne({
    _id: id,
  })
}

export async function addReviewToCollection(id, new_rev) {
  return Review.updateOne({ _id: id }, { $push: { reviews: new_rev } })
}

export async function getAllCollectionsFromOwner(oid) {
  return Collection.find({ owner_id: oid })
}

//User Profile Customization Functions
export async function customizeProfile(profileData) {
  const cust = new Customize(profileData)

  return await cust.save()
}

export async function updateProfileById(id, param, updateTo) {
  return Customize.updateOne({ _id: id }, { [param]: updateTo })
}
