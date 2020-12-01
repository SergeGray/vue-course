<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
					<div class="col col-sm-3">
						<div class="alert alert-default">
							<div>In Cart:</div>
						</div>
					</div>
				</div>
				<hr>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col col-sm-3 menu">
						<ul class="list-group">
							<router-link />
						</ul>
					</div>
					<div class="col col-sm-9">
						<transition>
							<router-view></router-view>
						</transition>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style>
</style>
