<template>
  <div >
    <!-- Wrapper -->
	<div id="body" class="is-preload-0 is-preload-1">
    <div id="wrapper">
      <!-- Home -->
      <article id="home" class="panel special">
        <div class="image">
          <img src="../images/me.jpg" alt="" data-position="center center" />
        </div>
        <div class="content">
          <div class="inner">
            <header>
              <h1 class="ml2">MinJoe</h1>
              <p>
                <span class="wrapper">
                  <span class="letters">
                    <p>
                      Hi! I'm MinJoe.<br />
                      I want to be a Front-End Engineer and living in Taipei, Taiwan.
                    </p>
                  </span>
                </span>
              </p>
            </header>
            <nav id="nav">
              <ul class="actions stacked special animated spinY">
                <li><a href="#work" class="button">Work</a></li>
                <li><a href="#about" class="button">About</a></li>
                <li><a href="#contact" class="button">Contact</a></li>
              </ul>
            </nav>
            <ul class="icons">
              <li>
                <a
                  href="https://www.instagram.com/mj97623/"
                  class="icon brands fa-instagram"
                  ><span class="label">Instagram</span></a
                >
              </li>
              <li>
                <a
                  href="https://github.com/CMinJoe"
                  class="icon brands fa-github"
                  ><span class="label">GitHub</span></a
                >
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100000312072568"
                  class="icon brands fa-facebook-f"
                  ><span class="label">facebook</span></a
                >
              </li>
            </ul>
           
          </div>
        </div>
      </article>

	  <article id="work" class="panel secondary">
						<div class="image fix">
							<img src="../images/work.gif" alt="" data-position="center center"/>
						</div>
						<div class="content">
							<ul class="actions animated spinX">
								<li><a href="#" class="button small back">Back</a></li>
							</ul>
							<div class="inner">
								<header>
									<h2>Work</h2>
								</header>
								<p>第一份工作為MIS，在職期間到赫綵設計學院上過平面設計以及前端設計課，主要多半在教HTML、CSS、JavaScript，期間也學會了PS、AI製圖軟體，在製作UI上方便許多。</p>
								<p>課程結束後自學Vue框架，此為第一個Vue實作作品。</p>
							</div>
						</div>
					</article>

				<!-- About -->
					<article id="about" class="panel secondary">
						<div class="image">
							<img src="../images/about.jpg" alt="" data-position="center center" />
						</div>
						<div class="content">
							<ul class="actions animated spinX">
								<li><a href="#" class="button small back">Back</a></li>
							</ul>
							<div class="inner">
								<header>
									<h2>About</h2>
									<p>我來自高雄市，畢業於雲林科技大學資訊管理系</p>
								</header>
							    <p>之前從事MIS，正在準備轉職為軟體工程師，
								 會轉職是因為發現自己對於網頁顯示特別有興趣，想做出厲害的顯示方式，但同時也了解功能的重要性，希望能做到整合系統功能同時顧及到UIUX的面向。</p>
							</div>
						</div>
					</article>

					<article id="contact" class="panel secondary">
						<div class="image">
							<img src="images/IMG_02.jpg" alt="" data-position="bottom center" />
						</div>
						<div class="content">
							<ul class="actions animated spinX">
								<li><a href="#" class="button small back">Back</a></li>
							</ul>
							<div class="inner">
								<header>
									<h2>Contact</h2>
								</header>
								<form method="post" action="#">
									<div class="fields">
										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="5"></textarea>
										</div>
									</div>
									<ul class="actions">
										<li><a href="" class="button submit">Send Message</a></li>
									</ul>
								</form>
							</div>
						</div>
					</article>


				<footer id="footer">
						<p class="copyright">MINJOE &copy; ALL RIGHTS RESEARVED.</p>
					</footer>


	</div>
    </div>
  </div>
</template>


<script>

export default {
  name: "HelloWorld",
  mounted() {
    this.init($);
  },
  methods: {
    init($) {

		var	$window = $(window),
		$document = $(document),
		$body = $('#body'),
		$wrapper = $('#wrapper'),
		$footer = $('#footer'),
		$panels = $wrapper.children('.panel'),
		$animatedLinks = $('.actions.animated a'),
		$animatedLink = null;

		Breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload-0');

				window.setTimeout(function() {
					$body.removeClass('is-preload-1');
				}, 1500);
			}, 100);
		});

		$animatedLinks
			.on('click', function(event) {

				var href = $(this).attr('href');

				// Not a panel link? Bail.
					if (href.charAt(0) != '#'
					||	(href.length > 1 && $panels.filter(href).length == 0))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Change panels.
					window.location.hash = '';
					window.location.hash = href;

				// Set animated link.
					$animatedLink = $(this);

			});

		var locked = true;

		// Fix images.
			$panels.each(function() {

				var	$this = $(this),
					$image = $this.children('.image'),
					$img = $image.find('img'),
					position = $img.data('position');

				// Set background.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set position (if set).
					if (position)
						$image.css('background-position', position);

				// Hide original.
					$img.hide();

			});

		// Unlock after a delay.
			window.setTimeout(function() {
				locked = false;
			}, 1250);

		// Hashchange event.
			$window.on('hashchange', function(event) {

				var $ul,
					delay = 0,
					$panel;

				// Get panel.
					if (window.location.hash && window.location.hash != '#')
						$panel = $(window.location.hash);
					else
						$panel = $panels.first();

					console.log(typeof($panel),typeof($panels));

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if (locked)
						return;

				// Lock.
					locked = true;

				// Animated link?
 					if ($animatedLink) {

 						$ul = $animatedLink.parents('ul');

						// Activate.
							$animatedLink.addClass('active');

						// Set delay.
							delay = 250;

					}

				// Delay.
					window.setTimeout(function() {

						// Deactivate all panels.
							$panels.addClass('inactive');

						// Deactivate footer.
							$footer.addClass('inactive');

						// Delay.
							window.setTimeout(function() {

								// Hide all panels.
									$panels.hide();

								// Show target panel.
									$panel.show();



								// Reset scroll.
									$document.scrollTop(0);

								// Delay.
									window.setTimeout(function() {

										// Activate target panel.
											$panel.removeClass('inactive');

										// Animated link?
											if ($animatedLink) {

												// Deactivate.
													$animatedLink.removeClass('active');

												// Clear.
													$animatedLink = null;

											}

										// Unlock.
											locked = false;

										// IE: Refresh.
											$window.triggerHandler('--refresh');

										window.setTimeout(function() {

											// Activate footer.
												$footer.removeClass('inactive');

										}, 250);

									}, 100);

							}, 350);

					}, delay);

			});

		// Initialize.
			(function() {

				var $panel;

				// Get panel.
					if (window.location.hash && window.location.hash != '#')
						$panel = $(window.location.hash);
					else
						$panel = $panels.first();

				// Deactivate + hide all but initial panel.
					$panels.not($panel)
						.addClass('inactive')
						.hide();

			})();
	
      var textWrapper = document.querySelector(".ml2");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml2 .letter",
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70 * i,
        })
        .add({
          targets: ".ml2",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    },
  },
};
</script>

<style scoped>
.fix{
	background-size: auto !important;
	background-color: black !important;
}
</style>