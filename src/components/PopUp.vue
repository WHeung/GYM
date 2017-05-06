<template>
	<div :class="$style.popUpWp" v-show='popUp.show'>
		<div :class="$style.wp">
			<p v-html="popUp.word">
			</p>
			<div :class="$style.ensure" v-if="popUp.leftMsg || popUp.rightMsg">
				<span :class="$style.leftBtn" @click.stop="cancel" v-if="popUp.leftMsg" v-html="popUp.leftMsg"></span>
				<span :class="$style.rightBtn" @click.stop="ensure" v-if="popUp.rightMsg" v-html="popUp.rightMsg"></span>
			</div>
		</div>
	</div>
</template>

<script>
  import * as types from '~src/store/types'
  export default{
    computed: {
      popUp () {
        return this.$store.state.popUp
      }
    },
    methods: {
      cancel () {
        this.popUp.cancelCallback && this.popUp.cancelCallback()
        this.$store.dispatch(types.CLOSE_POPUP)
      },
      ensure () {
        this.popUp.callback && this.popUp.callback()
        this.$store.dispatch(types.CLOSE_POPUP)
      }
    }
  }
</script>


<style lang="stylus" module>
.pop-up-wp{
	position: fixed;
	width: 100%;
	background: rgba(000, 000, 000, 0.5);
	top: 0;
	left 0
	bottom: 0;
	z-index: 500;
	.wp{
		position: absolute;
		top: 40%;
		left: 50%;
		width: 280px;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		border-radius: 10px;
		background-color: #fff;
		padding:0;
		p{
			text-align: center;
			font-size: 14px;
			line-height: 26px;
			color: #9B9B9B;
		}
		p:first-child{
			/*margin: 28px 30px;		*/
			margin: 28px 10px 15px;
		}
	}
	.ensure{
		border-top: 1px solid #eee;
		height: 42px;
		text-align: center;
		span{
			line-height: 42px;
			height: 42px;
			width: 49%;
			display: inline-block;
			font-size: 13px;
			color: #9b9b9b;
			vertical-align: top;
		}
		.right-btn {
			color: #32c47c;
			border-left: 1px solid #eee;
		}
	}
}
</style>
