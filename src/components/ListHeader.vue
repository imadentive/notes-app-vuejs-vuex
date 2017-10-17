<template>
    <div id="list-header">
        <h2>Notes | coligo</h2>
        <div class="btn-group btn-group-justified" role="group">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default" :class="{active: $store.state.filter === 'all'}" @click="$store.dispatch('filter','all')"> All Notes </button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default" :class="{active: $store.state.filter === 'fav'}" @click="$store.dispatch('filter','fav')"> Favorites </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>

