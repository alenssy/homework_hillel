const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

export const SelectedLanguage = ({ repos, selectedLanguage, selectLanguage }) => {
  return (
    <ul className='languages'>
      {languages.map((language, index) =>
          <li
              key={index}
              style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
              onClick={(e) => {
                if (repos) selectLanguage(e)
              }}>
              {language}
          </li>)}
    </ul>
  )
}
