import {
  SiPython, SiCplusplus, SiOpenjdk, SiJavascript,
  SiNumpy, SiPandas, SiScikitlearn,
  SiHtml5, SiCss, SiReact,
  SiGit, SiGithub, SiJupyter,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaChartLine, FaNetworkWired, FaBroom, FaCogs } from 'react-icons/fa';

export const skillGroups = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'C++', icon: SiCplusplus, level: 75 },
      { name: 'Java', icon: SiOpenjdk, level: 65 },
      { name: 'JavaScript', icon: SiJavascript, level: 60 },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'NumPy', icon: SiNumpy, level: 85 },
      { name: 'Pandas', icon: SiPandas, level: 85 },
      { name: 'Matplotlib', icon: FaChartLine, level: 80 },
      { name: 'Scikit-Learn', icon: SiScikitlearn, level: 80 },
      { name: 'Data Cleaning', icon: FaBroom, level: 82 },
      { name: 'Feature Engineering', icon: FaCogs, level: 75 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: SiHtml5, level: 88 },
      { name: 'CSS', icon: SiCss, level: 80 },
      { name: 'JavaScript', icon: SiJavascript, level: 65 },
      { name: 'React (Coming Soon)', icon: SiReact, level: 35 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, level: 78 },
      { name: 'GitHub', icon: SiGithub, level: 80 },
      { name: 'VS Code', icon: VscVscode, level: 90 },
      { name: 'Jupyter Notebook', icon: SiJupyter, level: 85 },
      { name: 'Cisco Packet Tracer', icon: FaNetworkWired, level: 70 },
    ],
  },
];
