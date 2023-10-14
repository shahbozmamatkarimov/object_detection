import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";

useEffect(() => {
  const initializeTensorFlow = async () => {
    await tf.setBackend("webgl");
    await tf.ready();
    // Your TensorFlow.js code here
  };

  initializeTensorFlow();
}, []);
