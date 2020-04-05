import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <form name='contactform' method='post' action='api/send_form_email.php'>
          <table>
            <tr>
              <td valign='top'>
                <label for='first_name'>First Name *</label>
              </td>
              <td valign='top'>
                <input type='text' name='first_name' maxLength='50' size='30'></input>
              </td>
            </tr>
            <tr>
              <td valign='top'>
                <label for='last_name'>Last Name *</label>
              </td>
              <td valign='top'>
                <input type='text' name='last_name' maxLength='50' size='30'></input>
              </td>
            </tr>
            <tr>
              <td valign='top'>
                <label for='email'>Email *</label>
              </td>
              <td valign='top'>
                <input type='text' name='email' maxLength='50' size='30'></input>
              </td>
            </tr>
            <tr>
              <td valign='top'>
                <label for='telephone'>Phone *</label>
              </td>
              <td valign='top'>
                <input type='text' name='telephone' maxLength='50' size='30'></input>
              </td>
            </tr>
            <tr>
              <td valign='top'>
                <label htmlFor='comments'>Comments *</label>
              </td>
              <td valign='top'>
                <textarea name='comments' maxLength='1000' cols='25' rows='6'></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <input type='submit' value='submit' />
              </td>
            </tr>
          </table>
        </form>
      </React.Fragment>
    );
  }
}
