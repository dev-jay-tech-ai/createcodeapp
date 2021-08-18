import { clickEventHandler, submitEventHandler } from './eventHandler.js'

const router = async () => {
const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
};
window.addEventListener('load', router);

const screen = {
  after_render: () => {
    document.getElementById('add').addEventListener('click', clickEventHandler);
    document.getElementById('submit-form').addEventListener('submit', submitEventHandler);
    
    $('input').bind('paste', function (e) {
      var $start = $(this);
      var source
    
      //check for access to clipboard from window or event
      if (window.clipboardData !== undefined) {
        source = window.clipboardData
      } else {
        source = e.originalEvent.clipboardData;
      }
      var data = source.getData("Text");
      if (data.length > 0) {
        if (data.indexOf("\t") > -1) {
          var columns = data.split("\n");
          $.each(columns, function () {
            var values = this.split("\t");
            $.each(values, function () {
              $start.val(this);
              if ($start.closest('td').next('td').find('input')[0] != undefined) {
              $start = $start.closest('td').next('td').find('input');
              }
              else
              { 
                return false;  
              }
            });
            $start = $start.closest('td').parent().next('tr').children('td:first').find('input');
          });
          e.preventDefault();
        }
      }
    });
  },
  render: async () => {
    return `
    <div>
      <form id='submit-form'>
        <table>
          <thead>
            <th>상품명</th>
            <th>컬러</th>
            <th>사이즈</th>
            <th>가격</th>
          </thead>
          <tbody id='table'>
            <tr id="row">
              <td><input type='text' placeholder='name' id='name' name='name'/></td>
              <td><input type='text' placeholder='color' id='color' name='color'/></td>
              <td><input type='text' placeholder='size' id='size' name='size'/></td>
              <td><input type='text' placeholder='price' id='price' name='price'/></td>
            </tr>
            <tr id= "newRow0">
              <td><input type='text' id="name0" placeholder='name' name='name'/></td>
              <td><input type='text' id="color0" placeholder='color' name='color'/></td>
              <td><input type='text' id="size0" placeholder='size' name='size'/></td>
              <td><input type='text' id="price0" placeholder='price' name='price'/></td>
            </tr>
          </tbody>  
        </table>  
        <div class='button-container'>
          <button type='button' id='add'>Create Row</button>
          <button type='submit'>Create Code</button>
        </div>
      </form>  
      <hr/>
      <!--반복문으로 값을 받아야함-->
      <div id="form" class="form-container">
        <table>
          <thead>
            <th>코드</th>
          </thead>
          <tbody>
          </tbody>
        </table>  
      </div>
      </div>
      <div id='results' ></div>
      `;
  }
}
