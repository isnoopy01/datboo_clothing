// $('.pages').pagination({
//     dataSource: [1, 2, 3, 4, 5, 6, 7, ... 195],
//     callback: function(data, pagination) {
//         // template method of yourself
//         var html = template(data);
//         dataContainer.html(html);
//     }
// })

// data mẫu
prd_arr = [
  {
    sorts: "t-shirt",
    name: "PORTER TEE",
    price: "320.000đ",
    img: "../assets/images/p-tee.png",
  },
  {
    sorts: "t-shirt",
    name: "MADE IN YG TEE",
    price: "300.000đ",
    img: "../assets/images/yg-vn.png",
  },
  {
    sorts: "t-shirt",
    name: "GOOD KIDS ONLY",
    price: "300.000đ",
    img: "../assets/images/yg-gko.png",
  },
  {
    sorts: "t-shirt",
    name: "DON'T STOP TEE",
    price: "310.000đ",
    img: "../assets/images/yg-ds.png",
  },
  {
    sorts: "t-shirt",
    name: "WHO AM I TEE",
    price: "300.000đ",
    img: "../assets/images/who-am-i-tee.png",
  },
  {
    sorts: "hoodie",
    name: "TIME IS MONEY",
    price: "299.000đ",
    img: "../assets/images/yg-tim.png",
  },
  {
    sorts: "t-shirt",
    name: "POLO SWEATSHIRT",
    price: "400.000đ",
    img: "../assets/images/yg-polos.png",
  },
  {
    sorts: "t-shirt",
    name: "DON'T BREAK MY HEART",
    price: "320.000đ",
    img: "../assets/images/yg-dbmh.png",
  },
  {
    sorts: "t-shirt",
    name: "HIM TEE",
    price: "150.000đ",
    img: "../assets/images/yg-him.png",
  },
  {
    sorts: "hoodie",
    name: "HOOD GOOD",
    price: "450.000đ",
    img: "../assets/images/yg-gh.png",
  },
  {
    sorts: "hoodie",
    name: "DREAM CLUB HOODIE",
    price: "450.000đ",
    img: "../assets/images/yg-hdc.png",
  },
  {
    sorts: "hoodie",
    name: "BASIC SWEATSHIRT OG",
    price: "450.000đ",
    img: "../assets/images/yg-bwo.png",
  },
  {
    sorts: "hoodie",
    name: "VGS HOODIE",
    price: "400.000đ",
    img: "../assets/images/yg-vgshd.png",
  },
  {
    sorts: "hoodie",
    name: "SLIPKNOT SWEATHOOD",
    price: "400.000đ",
    img: "../assets/images/yg-slips.png",
  },
  {
    sorts: "hoodie",
    name: "VINTAGE WASHED SWEATER",
    price: "380.000đ",
    img: "../assets/images/yg-vws.png",
  },
  {
    sorts: "hoodie",
    name: "HOOD BASIC",
    price: "350.000đ",
    img: "../assets/images/yg-hoodieb.png",
  },
  {
    sorts: "hoodie",
    name: "HOOD YOUNG GREEN",
    price: "370.000đ",
    img: "../assets/images/yg-hyg.png",
  },
  {
    sorts: "jacket",
    name: "THE DREAM CLUB",
    price: "360.000đ",
    img: "../assets/images/yg-thedream.png",
  },
  {
    sorts: "jacket",
    name: "ICON VARSITY",
    price: "550.000đ",
    img: "../assets/images/yg-iconv.png",
  },
  {
    sorts: "jacket",
    name: "VGS VARSITY",
    price: "700.000đ",
    img: "../assets/images/yg-vgss.png",
  },
  {
    sorts: "jacket",
    name: "FACE 'MARCUS' VARSITY",
    price: "680.000đ",
    img: "../assets/images/yg-facem.png",
  },
  {
    sorts: "jacket",
    name: "SUEDE BOMBER JACKET",
    price: "650.000đ",
    img: "../assets/images/yg-sbj.png",
  },
  {
    sorts: "jacket",
    name: "GILE JACKET",
    price: "350.000đ",
    img: "../assets/images/yg-glj.png",
  },
  {
    sorts: "jacket",
    name: "YGSW FLEECE JACKET",
    price: "450.000đ",
    img: "../assets/images/yg-yfj.png",
  },
];

// end data mẫu

var a_nodde_arr = $(".pages a");

for (var node_item of a_nodde_arr) {
  //   console.log($(node_item).data("id"));
}

var current = 1;
var rows_per_page = 6;
var total_rows = prd_arr.length;
var total_pages = Math.ceil(total_rows / rows_per_page);

paginate(current);

function buildProduct(prd_item) {
  var prd_node = `
                <div class="col-lg-4 col-md-4 all ${prd_item.sorts}">
                    <div class="product-item">
                        <a href="#"><img src="${prd_item.img}" alt=""></a>
                        <div class="down-content">
                            <a href="#"><h4>${prd_item.name}</h4></a>
                            <h6>${prd_item.price}</h6>
                        </div>
                    </div>
                </div>
                `;
  return prd_node;
}

function paginate(current) {
  var per_row = rows_per_page * (current - 1);

  var prd_arr_node = [];
  var prd_arr_node_tshirt = [];
  for (var i = 0; i < prd_arr.length; i++) {
    if (i >= per_row && i < per_row + rows_per_page) {
      // var prd_item_node = `product: ${prd_arr[i].name}`;
      var prd_item_node = buildProduct(prd_arr[i]);
      prd_arr_node.push(prd_item_node);
    }
  }

  $(".products .product-list > div").html(prd_arr_node);
  var limit = 4;
  var start, end;
  if (total_pages <= limit) {
    start = 1;
    end = total_pages;
  } else {
    if (current < Math.ceil(limit / 2)) {
      start = 1;
      end = start + (limit - 1);
    } else if (current > total_pages - Math.ceil(limit / 2)) {
      end = total_pages;
      start = end - limit + 1;
    } else {
      start = current - Math.floor(limit / 2);
      end = start + (limit - 1);
      if (start == 0) {
        start = 1;
        end += 1;
      }
    }
  }

  // var page_arr_node = `<li><a href="#" class="page-prev"><i class="fa fa-angle-left" ></i></a></li>`;
  var page_arr_node = "";

  for (var i = start; i <= end; i++) {
    if (i == current) {
      // echo "<span style='color:red;'>".$i.'</span><br>';
      // $(`.page-${i}`).addClass("active")

      page_arr_node += `<li class="page-${i} active"><a href="#" data-id="${i}">${i}</a></li>`;

      //   console.log(i);
    } else {
      // echo "<a href='test.php?page=".$i." '>".$i.'</a><br>';
      //   console.log("page " + i);

      page_arr_node += `<li class="page-${i}"><a href="#" data-id="${i}">${i}</a></li>`;
    }
  }

  // page_arr_node += `<li><a href="#" class="page-next"><i class="fa fa-angle-right" ></i></a></li>`;

  $(".pages").html(page_arr_node);

  $(".pages a").click(function (e) {
    e.preventDefault();
    // console.log($(this).data("id"));
    current = $(this).data("id");
    paginate(current);
  });
}
$(".page-next").click(function (e) {
  e.preventDefault();
  var page = 3;
  page += 1;
  console.log(page);
  console.log(typeof page);
  paginate(page);
});

//   $(".page-prev").click(function (e) {
//     e.preventDefault();

//     var page = parseInt($(".pages .active a").data("id")) - 1;
//     // paginate(page - 1);
//   });

var vijsOut = {
  post: function (action_XMLReq, data_XMLReq) {
    //console.log(action_XMLReq,data_XMLReq);
    if (data_XMLReq == null) data_XMLReq = {};
    var api =  "https://toan.boffice.vn/&action_XMLReq=web_user/" + action_XMLReq;
    var xhttp = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          //document.getElementById("demo").innerHTML = xhttp.responseText;
          //console.log(xhttp.responseText);
          resolve(xhttp.responseText);
        }
      };
      xhttp.open("POST", api, true);
      xhttp.setRequestHeader("accept", "text/api");
      xhttp.setRequestHeader("Content-type","text/plain;charset=UTF-8");
      xhttp.send(JSON.stringify(data_XMLReq));
    });
  }
}

function register() {
  var data = $("#form-register")
    .serializeArray()
    .reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  if (data.passcf != data.pass) {
    alert("Xác nhận mật khẩu sai");
  } else {
    vijsOut.post("dangki_test", data).then(response => {
      response = JSON.parse(response)
      if(response.alert){
        alert("Đăng kí tài khoản thành công!")
        window.location.href = "../../html1/login.html";
    }else{
        alert("username hoặc email đã được đăng kí");
    }
    });
  }

}

function login() {
  var data = $("#login-form")
    .serializeArray()
    .reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
    vijsOut.post("login_test", data).then(response => {
      response = JSON.parse(response)
      if(response.alert){
        window.location.href = "../../html2/index.html";
        
    }else{
        alert("Bạn nhập sai thông tin");
    }
    });
}

