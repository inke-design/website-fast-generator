const html = `
<section class="banner-one">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.ikstatic.cn/MTYwMzQxODU2MTk5MCM1NjMjanBn.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://img.ikstatic.cn/MTYwMzQxODU2MTk5MCM1NjMjanBn.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://img.ikstatic.cn/MTYwMzQxODU4ODc2OCM2MzcjanBn.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</section>
`;

const css = `
`

const script =  `
`

const exportModule = {
  script: {
    jQuery: {
      url: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
      }
    },
    popperJs: {
      url: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo',
      }
    },
    bootstrapJs: {
      url: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI' 
      }
    }
  },
  stylesheet: {
    bootstrapCSS: {
      url: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css',
      integrity: 'sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk',
      crossorigin: 'anonymous',
    }
  },
}

export default { html, css, script, exportModule };
