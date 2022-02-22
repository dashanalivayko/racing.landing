import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { makeStyles } from '@material-ui/core/styles';
import poster from '../media/poster.png';
import { fontFamily } from '../styles/theme';

const unityContext = new UnityContext({
  loaderUrl: 'unity/Build/TPR_proto_1.0.11.loader.js',
  dataUrl: 'unity/Build/TPR_proto_1.0.11.data',
  frameworkUrl: 'unity/Build/TPR_proto_1.0.11.framework.js',
  codeUrl: 'unity/Build/TPR_proto_1.0.11.wasm',
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'end',
    backgroundImage: `url(${poster.src})`,
    // borderRadius: '20px',
    display: 'flex',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  unityCanvas: {
    width: '100%',
    height: '100%',
    // borderRadius: '20px',
    // pointerEvents: 'all',
  },
  loading: {
    marginBottom: '70px',
    position: 'relative',
    background: '#FFFFFF',
    textStroke: '2px #061537',
    boxSizing: 'border-box',
    boxShadow: 'inset 0px -9px 0px #E2E2E2',
    borderRadius: '52px',
    width: '500px',
    height: '80px',
    padding: '15px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid #061537',
    '& p': {
      fontFamily: fontFamily,
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '36px',
      lineHeight: '49px',
      textAlign: 'right',
      textTransform: 'uppercase',
      color: '#3760C2',
      textStroke: '1.5px #1B3A80',
    },
    '&.fill': {
      background: '#3760C2',
      boxShadow: 'inset 0px -7px 0px #1B3A80',
      position: 'absolute',
      left: '-2px',
      top: '-2px',
      overflow: 'hidden',
      '& > p': {
        color: 'white',
        display: 'inline',
      },
    }
  }
}));

const LOADING_WIDTH = 500;

const UnityPage: React.FC = () => {
  const styles = useStyles();
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    unityContext.on('progress', (progression) => setProgression(progression));
    unityContext.on('loaded', () => setIsLoaded(true));
    console.log(progression)
  }, [progression]);

  const percent = Math.round(progression * 100);
  const width = LOADING_WIDTH * progression; 

  return (
    <div className={styles.root}>
      {
      !isLoaded &&
      <div className={styles.loading} style={{position: 'absolute', bottom: 0}}>
        <p>Loading</p>
        <p>{percent}%</p>
        <div className={`${styles.loading} fill`} style={{width: `${width}px`}}>
         <p style={{marginRight: '190px'}}>Loading</p>
         <p>{percent}%</p>
        </div>
      </div>}
      
      <Unity unityContext={unityContext} className={styles.unityCanvas} />
    </div>
  );
};

export { UnityPage };