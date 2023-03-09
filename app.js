/* Created by Tivotal */

const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;

//function to create pagination
element.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page) {
  let liTag = "";
  let activeLi;
  let beforePage = page - 1;
  let afterPage = page + 1;

  if (page > 1) {
    //if page value is greater than 1,
    //will show prev btn
    liTag += `<li class="btn prev"
        onclick="createPagination(totalPages, ${
          page - 1
        })"><span><i class="fas fa-angle-left"></i>Prev</span></li>`;
  }

  if (page > 2) {
    //if page value is greater than 2
    //will add li with value 1 after prev btn
    liTag += `<li class="num first"
        onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      //if page value is greater than 3
      //will add li tag with value (...)
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }

  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  //loop for creating pages
  for (var pLength = beforePage; pLength <= afterPage; pLength++) {
    if (pLength > totalPages) {
      continue;
    }

    if (pLength == 0) {
      pLength = pLength + 1;
    }

    if (page == pLength) {
      //if both are equal
      //will add class active to current page
      activeLi = "active";
    } else {
      //if not, leaving it blank
      activeLi = "";
    }
    liTag += `<li class="num ${activeLi}"
        onclick="createPagination(totalPages, ${pLength})"><span>${pLength}</span></li>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="num last"
        onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    //if page value is less than total pages
    //will show next btn
    liTag += `<li class="btn next"
        onclick="createPagination(totalPages, ${
          page + 1
        })">Next<span><i class="fas fa-angle-right"></i></span></li>`;
  }

  element.innerHTML = liTag;
  return liTag;
}
