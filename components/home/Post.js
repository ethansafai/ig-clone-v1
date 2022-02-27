import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { firebase, db } from "../../firebase";

const handleLike = (post) => {
  const currentLikeStatus = !post.likes_by_users.includes(
    firebase.auth().currentUser.email
  );

  db.collection("users")
    .doc(post.owner_email)
    .collection("posts")
    .doc(post.id)
    .update({
      likes_by_users: currentLikeStatus
        ? firebase.firestore.FieldValue.arrayUnion(
            firebase.auth().currentUser.email
          )
        : firebase.firestore.FieldValue.arrayRemove(
            firebase.auth().currentUser.email
          ),
    })
    .then(() => console.log("Document successfully updated!"))
    .catch((error) => console.log(error));
};

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 25 }}>
      <Divider />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text
        style={{
          color: "white",
          marginLeft: 10,
          fontWeight: "500",
          fontSize: 12,
        }}
      >
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 400 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View>
    <View
      style={{
        marginTop: 3,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "32%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={handleLike(post)}>
          <Image
            style={styles.footerIcon}
            source={require("../../assets/heart.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={require("../../assets/comment.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={{ uri: "https://cdn131.picsart.com/328472298029211.png" }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={require("../../assets/save.png")}
          />
        </TouchableOpacity>
      </View>
    </View>

    <Likes post={post} />
    <Caption post={post} />
    <CommentsSection post={post} />
    <Comments post={post} />
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes_by_users.length
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
      likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 3 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "bold" }}>{post.user}</Text>
      <Text>&nbsp;{post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5, marginLeft: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 && "all "}
        {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 2 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}>{comment.user + " "}</Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    borderColor: "#ff8555",
  },
  footerIcon: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 7,
    marginRight: 7,
    width: 21,
    height: 21,
  },
  textContainer: {
    margin: 2,
  },
});

export default Post;
