import Button from '../../../Assets/Components/Buttons/Button';
import styles from './BecomeAWebDeveloper.module.scss';



function BecomeAWebDeveloper() {

    return(
        <div className= {styles['boxBecome']}>
            <Button text = "Learn More"  color = "success"     />
            <Button text = "Get Started"   color = "warning"  />
            <Button text = "Purchase Now"  color = "primary"  />
            <Button text = "Load More" />
        </div>
    )
}


export default BecomeAWebDeveloper;