import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { About, Skills, Experience } from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ResumeNotice } from './components/UI';
export default function App(){return <><a href="#main" className="skip-link">Skip to content</a><Navigation/><main id="main"><Hero/><About/><Skills/><Projects/><Experience/><Contact/></main><ResumeNotice/></>;}
