import { React } from "react";
import '../../css/styles.scss';
import '../backgroundComponent/background.scss'
import Top from '../../Assets/icons/top.svg'
import Bottom from '../../Assets/icons/bottom.svg';


export default function() {

    return (
        <div className='background'>
          <div className='top'>
            <img src={Top} />
          </div>
          <div className='bottom'>
            <img src={Bottom} />
          </div>
      </div>
    );
}