import React from 'react';
import Baby from '../assets/baby.png';
import Pregnant from '../assets/pregnant.png';
import Patient from '../assets/patient.png';
import '../styles/Chiropractic.css';
import Navbar from '../components/Navbar';
import '../styles/Accessibility.css';
import AccessibilityToolbar from '../components/AccessibilityToolbar';
import Footer from '../components/Footer';


const Chiropractic: React.FC = () => {
    const rows = [
        {
          image: Baby, 
          text: 'Chiropractic care for babies focuses on gently addressing misalignments in their delicate spines that can occur during birth or early development. These adjustments can help alleviate common issues such as gas, colic, frequent spitting up, and difficulty breastfeeding. Proper spinal alignment can also promote restful sleep, essential for growth and development. Gentle and safe, chiropractic care supports your baby’s nervous system, helping them thrive physically and emotionally. If your baby is gassy, fussy, or struggling to settle at night, chiropractic care could provide the comfort and relief they need.',
        },
        {
          image: Pregnant,
          text: 'Pregnancy brings incredible changes to the body, and chiropractic care can provide much-needed relief during this transformative time. Specialized adjustments can alleviate back pain, reduce pressure on the hips, and ease discomfort caused by poor posture or a growing belly. Chiropractic care can also address common pregnancy issues like indigestion, headaches, and difficulty sleeping. By optimizing pelvic alignment, chiropractic adjustments can even support a smoother labor and delivery process. Gentle, safe, and tailored to your needs, chiropractic care helps you stay comfortable, energized, and ready for the journey of motherhood.',
        },
        {
          image: Patient,
          text: 'Whether you are an athlete looking to improve performance, an elderly individual seeking relief from chronic aches, or an average adult with everyday stress, chiropractic care offers benefits for everyone. Regular adjustments can improve mobility, reduce pain, and enhance overall well-being by keeping your spine and nervous system functioning optimally. Athletes benefit from improved recovery and injury prevention, while seniors gain increased flexibility and reduced discomfort. For the average man or woman, chiropractic care addresses posture-related pain, tension headaches, and more, helping you feel your best every day. Chiropractic care is not just about fixing problems—it is about optimizing health and vitality at any age.',
        },
      ];
    
      return (
        <div>
        <div>
            <Navbar />
        </div>
        <div>
            <AccessibilityToolbar />
        </div>

        <div className="responsive-container">
          {rows.map((row, index) => (
            <div key={index} className="responsive-row">
              <img src={row.image} alt={`Row ${index + 1}`} className="responsive-image" />
              <div className="responsive-text">{row.text}</div>
            </div>
          ))}
        </div>
        <div>
            <Footer />
        </div>
        </div>
        
      );
    };
export default Chiropractic;
