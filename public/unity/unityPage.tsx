import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { makeStyles } from '@material-ui/core/styles';

const unityContext = new UnityContext({
  loaderUrl: 'unity/Build/TPR_proto_1.0.6.loader.js',
  dataUrl: 'unity/Build/TPR_proto_1.0.6.data',
  frameworkUrl: 'unity/Build/TPR_proto_1.0.6.framework.js',
  codeUrl: 'unity/Build/TPR_proto_1.0.6.wasm',
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unityCanvas: {
    width: '100%',
    height: '100%',
    // maxHeight: '600px',
    // maxWidth: '960px',
  },
}));

const UnityPage: React.FC = () => {
  const styles = useStyles();
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    unityContext.on('progress', (progression) => setProgression(progression));
    unityContext.on('loaded', () => setIsLoaded(true));
  }, []);

  return (
    <div className={styles.root}>
      {!isLoaded && <p>Loading {Math.round(progression * 100)} percent...</p>}
      <Unity unityContext={unityContext} className={styles.unityCanvas} />
    </div>
  );
};

export { UnityPage };