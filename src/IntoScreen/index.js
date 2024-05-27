import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class IntoScreen extends Component {
  clickingStartButton = () => {
    const {history} = this.props
    history.push('/Instruction Screen')
  }

  render() {
    return (
      <div className="Into-Screen-Background-Image">
        <div className="Welcome-kiddo">
          <h1 className="heading-welcome-kiddo">Welcome Kiddo!</h1>
        </div>
        <img
          src="https://i.im.ge/2024/05/25/KarbQp.Cogsettings.png"
          className="margin-left-settings"
        />
        <img
          src="https://i.im.ge/2024/05/25/Karg31.Starstar.png"
          className="margin-left-settings"
        />
        <img
          src="https://i.im.ge/2024/05/25/Kar2uT.Group-153Cat.png"
          className="cat-image-size"
        />
       <Link to="/Instruction Screen">
        <img
          src="https://i.im.ge/2024/05/25/Kar3Rq.Group-123start.png"
          className="start-button"
          /></Link>
      </div>
    )
  }
}
export default IntoScreen
 