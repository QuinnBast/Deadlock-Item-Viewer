export class Item {
    constructor(jsonObject) {
        this.json = jsonObject
        this.name = jsonObject.name
        this.class_name = jsonObject.class_name
        this.image = jsonObject.image
        this.video = jsonObject.video
        this.properties = new Properties(jsonObject.properties)
        this.weapon_info = new WeaponInfo(jsonObject.weapon_info)
        this.dof_while_zoomed = new ItemDofWhileZoomed(jsonObject.dof_while_zoomed)
        this.points_cost = jsonObject.points_cost
        this.unlocks_cost = jsonObject.unlocks_cost
        this.max_level = jsonObject.max_level
        this.tier = jsonObject.tier
        this.item_slot_type = jsonObject.item_slot_type
        this.id = jsonObject.id
        this.child_items = jsonObject.child_items // An array of string or int
        this.video_mp4_h264 = jsonObject.video_mp4_h264
        this.type = jsonObject.type
        this.cost = jsonObject.cost
    }
}

export class Properties {
    constructor(jsonProperties) {
        if(jsonProperties == null) {
            return
        }
        this.ability_cast_delay = jsonProperties.ability_cast_delay
        this.ability_cast_range = jsonProperties.ability_cast_range
        this.ability_channel_time = jsonProperties.ability_channel_time
        this.ability_charges = jsonProperties.ability_charges
        this.ability_cooldown = jsonProperties.ability_cooldown
        this.ability_cooldown_between_charge = jsonProperties.ability_cooldown_between_charge
        this.ability_duration = jsonProperties.ability_duration
        this.ability_post_cast_duration = jsonProperties.ability_post_cast_duration
        this.ability_resource_cost = jsonProperties.ability_resource_cost
        this.ability_unit_target_limit = jsonProperties.ability_unit_target_limit
        this.channel_move_speed = jsonProperties.channel_move_speed
        this.tech_power = jsonProperties.tech_power
        this.weapon_power = jsonProperties.weapon_power
    }
}

export class WeaponInfo {
    constructor(jsonObject) {
        if(jsonObject == null) {
            return
        }
        this.spread = jsonObject.spread
        this.standing_spread = jsonObject.standing_spread
        this.scatter_yaw_scale = jsonObject.scatter_yaw_scale
        this.shooting_up_spread_penalty = jsonObject.shooting_up_spread_penalty
        this.zoom_move_speed_percent = jsonObject.zoom_move_speed_percent
        this.shoot_move_speed_percent = jsonObject.shoot_move_speed_percent
        this.horizontal_punch = jsonObject.horizontal_punch
        this.vertical_punch = jsonObject.vertical_punch
        this.recoil_recovery_speed = jsonObject.recoil_recovery_speed
        this.vertical_recoil = jsonObject.vertical_recoil
        this.horizontal_recoil = jsonObject.horizontal_recoil
        this.recoil_speed = jsonObject.recoil_speed
        this.zoom_fov = jsonObject.zoom_fov
        this.damage_falloff_start_range = jsonObject.damage_falloff_start_range
        this.damage_falloff_end_range = jsonObject.damage_falloff_end_range
        this.range = jsonObject.range
        this.bullet_lifetime = jsonObject.bullet_lifetime
        this.damage_falloff_start_scale = jsonObject.damage_falloff_start_scale
        this.damage_falloff_end_scale = jsonObject.damage_falloff_end_scale
        this.damage_falloff_bias = jsonObject.damage_falloff_bias
        this.bullets = jsonObject.bullets
        this.cycle_time = jsonObject.cycle_time
        this.reload_duration = jsonObject.reload_duration
        this.clip_size = jsonObject.clip_size
        this.burst_shot_count = jsonObject.burst_shot_count
        this.burst_shot_cooldown = jsonObject.burst_shot_cooldown
        this.bullet_gravity_scale = jsonObject.bullet_gravity_scale
        this.bullet_radius = jsonObject.bullet_radius
        this.bullet_reflect_scale = jsonObject.bullet_reflect_scale
        this.bullet_reflect_amount = jsonObject.bullet_reflect_amount
        this.bullet_inherit_shooter_velocity_scale = jsonObject.bullet_inherit_shooter_velocity_scale
        this.bullet_whiz_distance = jsonObject.bullet_whiz_distance
        this.crit_bonus_start = jsonObject.crit_bonus_start
        this.crit_bonus_end = jsonObject.crit_bonus_end
        this.crit_bonus_start_range = jsonObject.crit_bonus_start_range
        this.crit_bonus_end_range = jsonObject.crit_bonus_end_range
        this.crit_bonus_against_npcs = jsonObject.crit_bonus_against_npcs
        this.shoot_spread_penalty_per_shot = jsonObject.shoot_spread_penalty_per_shot
        this.shoot_spread_penalty_decay_delay = jsonObject.shoot_spread_penalty_decay_delay
        this.shoot_spread_penalty_decay = jsonObject.shoot_spread_penalty_decay
        this.recoil_shot_index_recovery_time_factor = jsonObject.recoil_shot_index_recovery_time_factor
        this.can_zoom = jsonObject.can_zoom
        this.reload_move_speed = jsonObject.reload_move_speed
        this.auto_replenish_clip = jsonObject.auto_replenish_clip
        this.penetration_percent = jsonObject.penetration_percent
        this.npm_aiming_spread = jsonObject.npm_aiming_spread
        this.bullet_damage = jsonObject.bullet_damage
    }
}

// Depth of Field change while an item is zoomed in
export class ItemDofWhileZoomed {
    constructor(jsonObject) {
        if(jsonObject == null) {
            return
        }
        this.dof_near_crisp = jsonObject.dof_near_crisp
        this.dof_far_crisp = jsonObject.dof_far_crisp
        this.dof_far_blurry = jsonObject.dof_far_blurry
    }
}