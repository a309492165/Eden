;(function (window, document) {
  function Etable(obj) {
    return Etable.prototype.init(obj)
  }

  Etable.prototype = {
    constructor: Etable,
    id: undefined,
    _d: {
      headData: [],
      rowData: [],
      data: [],
    },
    headData: [],
    rowData: [],
    data: [],
    _dom: null,
    noneRow: 0,
    edit: true,
    xName: null,
    yName: null,
    init: function (obj) {
      obj = obj || {}
      if (JSON.stringify(obj) === '{}') return
      this.initObj(obj)
      this.makeTable()
      this.changeEvent()
    },
    initObj: function (obj) {
      var _this = this
      _this.noneRow = Number(obj.noneRow) || _this.noneRow
      _this.isNoneRow(obj)
      _this.id = obj.id || _this.id
      _this._d.headData = _this.deepClone(obj.headData) || _this._d.headData
      _this._d.rowData = _this.deepClone(obj.rowData) || _this._d.rowData
      _this._d.data = _this.deepClone(obj.data) || _this._d.data
      _this.headData = obj.headData || _this.headData
      _this.rowData = obj.rowData || _this.rowData
      _this.data = obj.data || _this.data
      _this.edit = JSON.stringify(obj.edit) === 'false' ? obj.edit : _this.edit
      _this.xName = obj.xName || _this.xName
      _this.yName = obj.yName || _this.yName
    },
    isNoneRow: function (obj) {
      if (obj.rowData.length === 0 && this.noneRow > 0) {
        for (var i = 0; i < this.noneRow; i++) {
          var tml = { rid: i, value: '预留行' + i }
          obj.rowData.push(tml)
        }
      }
    },
    makeTable: function () {
      var _this = this
      _this.makeTml(_this.headData, _this.rowData, _this.data)
      _this._d.headData = _this.deepClone(_this.headData)
      _this._d.rowData = _this.deepClone(_this.rowData)
      _this._d.data = _this.deepClone(_this.data)
    },
    reloadTable: function () {
      var _this = this
      _this.makeTml(_this._d.headData, _this._d.rowData, _this._d.data)
      _this.headData = _this.deepClone(_this._d.headData)
      _this.rowData = _this.deepClone(_this._d.rowData)
      _this.data = _this.deepClone(_this._d.data)
    },
    createHead: function () {
      var hid = 0
      if (this.headData.length > 0) {
        hid += this.arrMaxId(this.headData, 'hid')
      }
      var tml = { hid: hid, value: '测试预案' + hid }
      this.headData.push(tml)
      this.makeData()
    },
    createRow: function () {
      var rid = 0
      if (this.rowData.length > 0) {
        rid += this.arrMaxId(this.rowData, 'rid')
      }
      var tml = { rid: rid, value: '部门' + rid }
      this.rowData.push(tml)
      this.makeData()
    },
    arrMaxId: function (arr, id) {
      // 判断最大 id 移动表头列用
      var max = arr[0][id]
      for (var i = 0; i < arr.length - 1; i++) {
        max = max < arr[i + 1][id] ? arr[i + 1][id] : max
      }
      return max + 1
    },
    deleteHead: function (id) {
      for (var i = 0; i < this.headData.length; i++) {
        var item = this.headData[i]
        if (id == item.hid) {
          this.headData.splice(i, 1)
          break
        }
      }
      for (var i = 0; i < this.data.length; i++) {
        if (!this.data[i]) return
        for (var j = 0; j < this.data[i].length; j++) {
          var item = this.data[i][j]
          if (id == item.hid) {
            this.data[i].splice(j, 1)
            break
          }
        }
      }
    },
    deleteRow: function (id) {
      for (var i = 0; i < this.rowData.length; i++) {
        var item = this.rowData[i]
        if (id == item.rid) {
          this.rowData.splice(i, 1)
          break
        }
      }
      for (var i = 0; i < this.data.length; i++) {
        if (!this.data[i]) return
        for (var j = 0; j < this.data[i].length; j++) {
          var item = this.data[i][j]
          if (id == item.rid) {
            this.data.splice(i, 1)
            break
          }
        }
      }
    },
    makeData: function () {
      var _this = this
      if (_this.headData.length > 0 && _this.rowData.length > 0) {
        _this.data = []
        for (var i = 0; i < _this.rowData.length; i++) {
          if (!_this.data[i]) {
            _this.data[i] = []
          }

          for (var j = 0; j < _this.headData.length; j++) {
            if (!_this.data[i][j]) {
              _this.data[i][j] = tml(
                _this.rowData[i].rid,
                _this.headData[j].hid,
                ''
              )
            }
          }
        }
      }
      
      function tml(rid, hid, value) {
        return {
          rid: rid,
          hid: hid,
          value: value,
        }
      }
    },
    makeTml: function (h, r, d) {
      var _this = this
      if (!_this.id) {
        console.error('无效id')
        return
      }
      var head = _this.makeTmlH(h, r, d)
      var body = _this.makeTmlB(h, r, d)
      $(_this.id).empty()
      $(_this.id).css({
        width: h.length * 122 + 122 + 'px',
      })
      $(_this.id).append(head)
      $(_this.id).append(body)
    },
    makeTmlH: function (h, r, d) {
      var _this = this
      var div = $('<div class="e-table-head"></div>')
      var table = $('<table></table>')
      var tbody = $('<tbody></tbody>')
      var tr = $('<tr></tr>')
      var str =
        '<th style="width: 122px;position: relative;">' +
        '<input type="text" disabled>' +
        '<div class="out"><b>' +
        _this.xName +
        '</b> <em>' +
        _this.yName +
        '</em></div>' +
        '</th>'
      if (h.length > 0) {
        for (var i = 0; i < headData.length; i++) {
          str +=
            '<th>' + _this.isEditStrH(h, i) + '</th>'
        }
      }
      tr.html(str)
      div.append(table.append(tbody.append(tr)))
      return div
    },
    isEditStrH: function (h, i) {
      var str = ''
      if (this.edit) {
        str += '<button class="del del-h" data-hid="' +
        h[i].hid +
        '">x</button>' +
        '<input class="head-input" type="text" data-hid="' +
        h[i].hid +
        '" value="' +
        h[i].value +
        '">' +
        '<span class="move-left" data-hid="' +
        h[i].hid +
        '">左</span>' +
        '<span class="move-right" data-hid="' +
        h[i].hid +
        '">右</span>'
      } else {
        str += '<p data-hid="'+h[i].hid +'">' + h[i].value + '</p>'
      }
      return str
    },
    makeTmlB: function (h, r, d) {
      var _this = this
      var div = $('<div class="e-table-body"></div>')
      var table = $('<table></table>')
      var tbody = $('<tbody></tbody>')
      if (h.length > 0 && r.length > 0) {
        var str = ''
        for (var i = 0; i < d.length; i++) {
          str += '<tr>'
          str += '<td>'+_this.isEditStrR(r, i)+'</td>'
          for (var j = 0; j < d[i].length; j++) {
            var item = d[i][j]
            if (item !== undefined && item.hid == h[j].hid) {
              str +=
                '<td>'+_this.isEditStrB(item)+'</td>'
            }
          }
          str += '</tr>'
        }
      } else if (r.length > 0) {
        var str = ''
        for (var i = 0; i < r.length; i++) {
          str +=
            '<tr><td>'+_this.isEditStrR(r, i)+'</td></tr>'
        }
      }
      tbody.html(str)
      div.append(table.append(tbody))
      return div
    },
    isEditStrR: function (r, i) {
      var _this = this
      var str = ''
      if (this.edit) {
        var btnstr = ''
        if (r[i] !== undefined ) {
          btnstr =
            '<button class="del del-r" data-rid="' + r[i].rid + '">x</button>'
        }
        if (i < _this.noneRow) {
          btnstr = ''
        }
        str += btnstr +
        '<input class="row-input" type="text" data-rid="' +
        r[i].rid +
        '" value="' +
        r[i].value +
        '">'
      } else {
        str += '<p data-hid="'+r[i].rid +'">' + r[i].value + '</p>'
      }
      return str
    },
    isEditStrB: function (item) {
      var str = ''
      if (this.edit) {
        str += '<textarea class="body-input" type="text" data-rid="' +
        item.rid +
        '" data-hid="' +
        item.hid +
        '" value="' +
        item.value +
        '">' +
        item.value +
        '</textarea>'
      } else {
        str += '<p class="body-input" type="text" data-rid="' +
        item.rid +
        '" data-hid="' +
        item.hid +
        '" value="' +
        item.value +
        '">' +
        item.value +
        '</p>'
      }
      return str
    },
    moveHeadArr: function (id, lr) {
      for (var i = 0; i < this.headData.length; i++) {
        var item = this.headData[i]
        if (id == item.hid) {
          if (lr == 'left') {
            this.upGoArr(this.headData, i)
            break
          } else if (lr == 'right') {
            this.downGoArr(this.headData, i)
            break
          }
        }
      }
      for (var i = 0; i < this.data.length; i++) {
        if (!this.data[i]) return
        for (var j = 0; j < this.data[i].length; j++) {
          var item = this.data[i][j]
          if (id == item.hid) {
            if (lr == 'left') {
              this.upGoArr(this.data[i], j)
              break
            } else if (lr == 'right') {
              this.downGoArr(this.data[i], j)
              break
            }
          }
        }
      }
    },
    swapArr: function (arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0]
      return arr
    },
    upGoArr: function (fieldData, index) {
      if (index != 0) {
        fieldData[index] = fieldData.splice(index - 1, 1, fieldData[index])[0]
      } else {
        fieldData.push(fieldData.splice(0, 1)[0])
      }
    },
    downGoArr: function (fieldData, index) {
      if (index != fieldData.length - 1) {
        fieldData[index] = fieldData.splice(index + 1, 1, fieldData[index])[0]
      } else {
        fieldData.unshift(fieldData.splice(index, 1)[0])
      }
    },
    on: function (name, e, callback) {
      var _this = this
      $(document).on(e, name, function () {
        callback(_this, $(this))
      })
    },
    deepClone: function (o) {
      return JSON.parse(JSON.stringify(o))
    },
    changeEvent: function () {
      var _this = this
      $(document).on('change', this.id + ' .head-input', function (e) {
          var id = $(this).data('hid')
          for (var i = 0; i < _this.headData.length; i++) {
            var item = _this.headData[i]
            if (id == item.hid) {
              item.value = $(this).val()
            }
          }
        })
      $(document).on('change', this.id + ' .row-input', function (e) {
          var id = $(this).data('rid')
          for (var i = 0; i < _this.rowData.length; i++) {
            var item = _this.rowData[i]
            if (id == item.rid) {
              item.value = $(this).val()
            }
          }
        })
      // $(document).on('change', this.id + ' .body-input', function (e) {
      //     var hid = $(this).data('hid')
      //     var rid = $(this).data('rid')
      //     for (var i = 0; i < _this.data.length; i++) {
      //       for (var j = 0; j < _this.data[i].length; j++) {
      //         var item = _this.data[i][j]
      //         if (hid == item.hid && rid == item.rid) {
      //           item.value = $(this).val()
      //         }
      //       }
      //     }
      //   })
    },
  }

  Etable.prototype.init.prototype = Etable.prototype
  window.Etable = Etable
})(window, document)
