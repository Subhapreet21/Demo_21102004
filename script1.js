// !Named Export

const collegeName = "MRUH";
function Tasking() {
  console.log("I am learning to code now at " + collegeName);
  document.getElementById("hello").innerText =
    "I am learning to code now at " + collegeName;
}

export { collegeName, Tasking };

// ! Default Export

const marks = 100;
export default marks;
