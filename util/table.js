/**
 * Created by PengJianlin on 2017/5/15.
 */

function buildTable(dom, data, operation) {
  var tbody = dom.find('tbody');
  tbody.children().remove();
  for(var i = 0, length = data.length; i < length; i++) {
    var tr = '<tr>';
    for(var key in data[i]) {
      tr += '<td>' + data[i][key] + '</td>';
    }
    if(operation) {
      tr += '<td>' + operation + '</td>';
    }
    tr += '</tr>';
    tbody.append(tr);
  }
}